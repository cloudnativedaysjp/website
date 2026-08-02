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

### Dreamkast連携（スポンサー/タイムテーブル/セッション/ジョブボード）

```text
src/lib/dreamkast/
├── schema.ts             # Sponsor/Talk/Track/Speaker等のzodスキーマ
├── client.ts             # src/data/dreamkast/ のJSONスナップショットを読む（APIは直接叩かない）
├── image-downloader.ts   # update-data.ts用のETag対応ダウンローダ
├── assets.ts             # ロゴ/アバター画像のglob解決、tierグルーピング
└── timetable-config.ts   # 日程・スロット・トラック等のイベント固有設定
```

`src/types/{talk,speaker}.ts`（過去イベント用）とは名前が衝突するため意図的に分離しており、`src/lib/dreamkast/` の外からこの名前空間の型を過去イベントページに持ち込まない。

データは `src/data/dreamkast/`（実データ、本番投入待ち）と `src/data/dreamkast-fixtures/`（cnk由来のテストデータ、検証用）に分かれている。詳細は下記「機能フラグ」「Dreamkastデータ層」を参照。

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
npm run update:data  # Dreamkast APIから src/data/dreamkast/ のスナップショットJSONを更新（要ネットワーク・APIトークン）
```

## 機能フラグ

`src/features.ts` の `FEATURES` オブジェクトで、Dreamkast連携の各機能をデフォルトOFFのトグルとして管理している（`blog` のみ常時ON）。

| フラグ            | 環境変数            | 制御対象                                  |
| ------------------ | -------------------- | ------------------------------------------ |
| `FEATURES.sponsors`  | `ENABLE_SPONSORS`  | スポンサーセクション（トップページ `#sponsors`） |
| `FEATURES.timetable` | `ENABLE_TIMETABLE` | `/timetable/*` ページ                     |
| `FEATURES.sessions`  | `ENABLE_SESSIONS`  | `/sessions/*` ページ                      |
| `FEATURES.jobboard`  | `ENABLE_JOBBOARD`  | `/jobboard` ページ                        |

環境変数には `true`/`1`/`yes`/`on`（大文字小文字・前後空白は無視）のいずれかを指定するとONになる。各フラグは以下の3面を制御する:

1. 該当ページの `getStaticPaths`（OFF時は空配列を返しページ自体を生成しない）
2. `Layout.astro`（Navbar）と `Footer.astro` のリンク表示
3. トップページ（`src/pages/index.astro`）の該当セクション描画

動作確認例（フィクスチャデータで全機能をONにしてビルド）:

```bash
ENABLE_SPONSORS=true ENABLE_TIMETABLE=true ENABLE_SESSIONS=true ENABLE_JOBBOARD=true \
  DREAMKAST_DATA_DIR=src/data/dreamkast-fixtures npm run build
```

## Dreamkastデータ層

スポンサー・タイムテーブル・セッション・ジョブボードのデータは、ビルド時に `src/data/dreamkast/`（または `DREAMKAST_DATA_DIR` で指定したディレクトリ）配下のスナップショットJSONを読むだけで、Dreamkast APIを直接叩くことはない（`src/lib/dreamkast/client.ts`）。

関連する環境変数（`src/server-constants.ts`）:

| 変数名                | 説明                                       | デフォルト               |
| ---------------------- | ------------------------------------------ | ------------------------- |
| `EVENT_ABBR`           | update-data取得対象イベントの略称          | `cndw2026`                |
| `DREAMKAST_API_BASE`   | Dreamkast APIのベースURL                   | `https://event.cloudnativedays.jp/api/v1` |
| `DREAMKAST_DATA_DIR`   | スナップショットJSONの読み込み先ディレクトリ | `src/data/dreamkast`      |

**データ更新フロー**（API準備・トークン入手後）:

1. ローカルで `npm run update:data` を実行（`scripts/update-data.ts`、ネットワークアクセス必須）し、`src/data/dreamkast/*.json` とロゴ・アバター画像（`src/assets/dreamkast/`）を生成
2. 生成物をコミット
3. タグをプッシュしてデプロイ（本番ビルドはAPIを叩かず、コミット済みスナップショットのみを読む）

タイムテーブルの日程・スロット・トラック表示名などのイベント固有設定は `src/lib/dreamkast/timetable-config.ts` に集約されている。現時点では暫定値が入っており、`TODO(CNDW2026)` マーカーの箇所は実データ確定後に更新が必要。

### テストフィクスチャ

`src/data/dreamkast-fixtures/` はcnk（kaigi.cloudnativedays.jp）由来のテストデータで、`DREAMKAST_DATA_DIR=src/data/dreamkast-fixtures` を指定した場合のみ読み込まれる（デフォルトの `src/data/dreamkast` は本番データ用で当初空）。本番データ投入後は削除予定。

### ジョブボード

`src/data/dreamkast/jobboard.json` は実データ・手動管理で、`[{ id: <スポンサーID>, description: <markdown> }]` の配列形式で作成する。`id` は `sponsors.json` のスポンサーIDと一致させる必要があり、一致しないエントリはジョブボードに表示されない。

## ブログ

- **検索**: MiniSearchを使用したクライアント検索。`src/pages/posts/search-index.json.ts` がビルド時に検索インデックスを生成し、`/posts` の検索ボックスから利用する
- **RSS**: `src/pages/rss.xml.ts` が `/rss.xml` を生成
- **ページネーション**: 廃止済み。`/posts` は全件表示

## コーディング規約

- **TypeScript**: 厳密な型付けを使用
- **コンポーネント**: Astroコンポーネント（`.astro`）を優先、インタラクティブな部分のみReact
- **スタイリング**: Tailwind CSSのユーティリティクラスを使用
- **フォーマット**: Prettier で整形（`npm run format`）

## 注意点

- **環境変数**: ブログ機能には `NOTION_API_SECRET` と `DATABASE_ID` が必要。Dreamkast連携の各機能フラグ・環境変数は上記「機能フラグ」「Dreamkastデータ層」を参照
- **画像**: イベントロゴは `/public/images/assets/` に配置
- **ビルド確認**: 変更後は `npm run build` でビルドエラーがないか確認
- **型チェック**: 新しいデータ追加時は型定義と整合性を確認

## デプロイ

GitHub Actions で自動デプロイ（タグプッシュ時）:

```bash
git tag vX.X.X
git push --tags
```
