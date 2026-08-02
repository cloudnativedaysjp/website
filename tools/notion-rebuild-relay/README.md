# Notion → GitHub Actions リビルド中継 (GAS)

Notion DBのボタンアクションからwebsiteの強制リビルドをトリガーするための中継です。

## 構成

```
Notionボタン → GAS Web App → GitHub repository_dispatch → deploy_to_s3.yaml
                (この中継)      (event_type: rebuild-website)   最新のv*タグをビルドしてデプロイ
```

中継が必要な理由: Notionのwebhookアクションはリクエストボディをカスタマイズできず、
GitHubの`repository_dispatch` APIが必須とする`{"event_type": "..."}`形式のボディを
送れないため、GASでボディを組み立て直して転送します。

リビルド時は**最新の`v*`タグ**がビルドされます(mainのHEADではない)。コードの変更は
従来通りreleasebotのタグリリースで反映し、このボタンはNotionコンテンツの再取得・
再デプロイ専用です。

## セットアップ手順

### 1. GitHubトークンの発行

Fine-grained personal access tokenを発行する:

- 対象リポジトリ: `cloudnativedaysjp/website` のみ
- 権限: **Contents: Read and write**(repository_dispatchの発行に必要)
- 有効期限: 運用に合わせて設定(失効時はGAS側の差し替えのみで済む)

組織設定でfine-grained PATが許可されていない場合はclassic PAT(`repo`スコープ)を使用。
それも不可の場合は既存GitHub App(APP_ID / PRIVATE_KEY)のinstallation token方式への
切り替えを検討する。

### 2. GAS Web Appのデプロイ

1. [script.google.com](https://script.google.com) で新規プロジェクトを作成し、`main.gs` の内容を貼り付ける
2. プロジェクト設定 → スクリプト プロパティに以下を設定:
   - `GITHUB_TOKEN`: 手順1で発行したトークン
   - `SHARED_TOKEN`: 呼び出し認証用のランダム文字列(例: `openssl rand -hex 24` で生成)
3. デプロイ → 新しいデプロイ → 種類「ウェブアプリ」:
   - 実行ユーザー: **自分**
   - アクセスできるユーザー: **全員**(認証は`SHARED_TOKEN`で行う)
4. 発行されたWeb AppのURL(`https://script.google.com/macros/s/.../exec`)を控える

> **注意**: `main.gs` を修正した場合は「デプロイを管理」から**新しいバージョン**として
> 再デプロイしないと反映されない。

### 3. Notionボタンの設定

ブログ記事DBのボタンプロパティ(またはオートメーション)にwebhookアクションを追加:

- URL: `https://script.google.com/macros/s/.../exec?token=<SHARED_TOKEN>`
- メソッド: POST(ボディ・ヘッダーの追加設定は不要)

## 動作確認

```bash
# 中継経由でトリガー(Actionsの「Deploy Website to S3」が起動すればOK)
curl -X POST "https://script.google.com/macros/s/.../exec?token=<SHARED_TOKEN>" -L

# 誤ったトークンでは {"ok":false,...} が返り、Actionsが起動しないことを確認
curl -X POST "https://script.google.com/macros/s/.../exec?token=wrong" -L

# 中継を挟まず直接GitHub APIを叩く場合(切り分け用)
curl -X POST "https://api.github.com/repos/cloudnativedaysjp/website/dispatches" \
  -H "Authorization: Bearer <GITHUB_TOKEN>" \
  -H "Accept: application/vnd.github+json" \
  -d '{"event_type": "rebuild-website"}'
```

起動したワークフローのログ(Resolve ref to buildステップ)で、最新の`v*`タグが
checkoutされていることを確認する。

## 既知の挙動・注意点

- **GAS Web AppはPOSTに302リダイレクトで応答する仕様。** 処理(GitHubへの転送)は
  最初のPOSTで実行済みのため、呼び出し元がリダイレクトを追わなくてもリビルドは走る。
  Notion側でボタンがエラー表示になる場合があるが実害はない。
- `repository_dispatch`は**mainブランチ上のワークフロー定義**で発火する。ワークフローの
  変更はmainに反映されるまでボタン起動に効かない。
- ボタン連打しても`concurrency: deploy-website`によりデプロイは直列化される
  (実行中のデプロイはキャンセルされない)。
- `SHARED_TOKEN`入りのURLはNotionのボタン設定を編集できる人全員に見える。漏洩が
  疑われる場合はスクリプト プロパティの`SHARED_TOKEN`とNotion側URLを更新する
  (できることはリビルドの起動のみで、コードやデータの変更はできない)。
