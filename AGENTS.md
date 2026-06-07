# AGENTS.md

このファイルはAIエージェント（Claude Code等）がこのリポジトリで開発する際のガイドラインです。

## プロジェクト概要

CloudNative Days (<https://cloudnativedays.jp>) の公式ウェブサイト。Astro + TypeScript + Tailwind CSS で構築された静的サイト。

## 技術スタック

- **フレームワーク**: Astro 5.x（静的サイトジェネレータ）
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: Notion（ブログ記事）
- **ホスティング**: AWS S3 + CloudFront

## 重要なファイル・ディレクトリ

### データ管理

```text
src/data/
├── data.ts          # イベント・スピーカー・トークのエクスポート（新イベント追加時に編集必須）
├── events/          # イベント情報 JSON
├── speakers/        # スピーカー情報 JSON
└── talks/           # トーク情報 JSON
```

### 型定義

```text
src/types/
├── conference.ts    # Conference, ConferenceDay 型
├── speaker.ts       # Speaker 型
└── talk.ts          # Talk 型
```

### ページ

```text
src/pages/
├── index.astro      # トップページ
├── [abbr].astro     # イベント詳細ページ（動的ルーティング）
├── history.astro    # イベント履歴
├── posts/           # ブログ関連ページ
└── *.md             # 静的Markdownページ（CoC、プライバシーポリシー等）
```

### コンポーネント

```text
src/components/      # 再利用可能なAstroコンポーネント
src/layouts/         # レイアウトコンポーネント
```

### Notion連携

```text
src/lib/notion/
├── client.ts        # Notion APIクライアント
├── responses.ts     # レスポンス型定義
└── request-params.ts
```

## よくある開発タスク

### 新しいイベントを追加する

1. `src/data/events/{eventname}.json` を作成
2. `src/data/speakers/{eventname}.json` を作成（空配列 `[]` でも可）
3. `src/data/talks/{eventname}.json` を作成（空配列 `[]` でも可）
4. `src/data/data.ts` の `events` 配列に `'{eventname}'` を追加

**イベントJSONの必須フィールド**:

```json
{
  "id": 数値,
  "name": "イベント名",
  "abbr": "略称（URLパスに使用）",
  "status": "registered",
  "theme": "テーマ",
  "image": "/images/assets/{abbr}.svg",
  "venue": "会場名",
  "location": "開催地",
  "format": "offline" | "online" | "hybrid",
  "about": "イベント説明",
  "privacy_policy": "",
  "privacy_policy_for_speaker": "",
  "copyright": "© ...",
  "coc": "Code of Conduct テキスト",
  "conferenceDays": [
    { "id": 数値, "date": "YYYY-MM-DD", "internal": false }
  ]
}
```

### ページを追加する

- `src/pages/` に `.astro` または `.md` ファイルを作成
- ファイルパスがそのままURLになる（例: `src/pages/foo.astro` → `/foo`）

### コンポーネントを追加する

- `src/components/` に `.astro` ファイルを作成
- 命名規則: PascalCase（例: `MyComponent.astro`）

## コマンド

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run preview      # ビルド結果プレビュー
npm run lint         # コードチェック（ESLint + Prettier）
npm run format       # コードフォーマット
```

## コーディング規約

- **TypeScript**: 厳密な型付けを使用
- **コンポーネント**: Astroコンポーネント（`.astro`）を優先、インタラクティブな部分のみReact
- **スタイリング**: Tailwind CSSのユーティリティクラスを使用
- **フォーマット**: Prettier で整形（`npm run format`）

## 注意点

- **環境変数**: ブログ機能には `NOTION_API_SECRET` と `DATABASE_ID` が必要
- **画像**: イベントロゴは `/public/images/assets/` に配置
- **ビルド確認**: 変更後は `npm run build` でビルドエラーがないか確認
- **型チェック**: 新しいデータ追加時は型定義と整合性を確認

## デプロイ

GitHub Actions で自動デプロイ（タグプッシュ時）:

```bash
git tag vX.X.X
git push --tags
```
