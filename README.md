# CloudNative Days Website

[cloudnativedays.jp](https://cloudnativedays.jp) のオフィシャルウェブサイトです。

日本最大のCloud Native技術の祭典「CloudNative Days」の情報発信プラットフォームとして、イベント情報、ブログ記事、スピーカー・セッション情報などを提供しています。

## 技術スタック

| カテゴリ       | 技術                              |
| -------------- | --------------------------------- |
| フレームワーク | [Astro](https://astro.build/) 5.x |
| 言語           | TypeScript                        |
| スタイリング   | Tailwind CSS                      |
| CMS            | Notion (ブログ記事管理)           |
| ホスティング   | AWS S3 + CloudFront               |

## 🚀 Getting Started

### Prerequisites

- Node.js v18以上
- npm

### 環境変数

ブログ機能を利用する場合、以下の環境変数が必要です:

| 変数名                  | 説明                                           | 必須             |
| ----------------------- | ---------------------------------------------- | ---------------- |
| `NOTION_API_SECRET`     | Notion API シークレットキー                    | ブログ機能使用時 |
| `DATABASE_ID`           | Notion データベース ID                         | ブログ機能使用時 |
| `PUBLIC_GA_TRACKING_ID` | Google Analytics トラッキング ID               | 任意             |
| `CUSTOM_DOMAIN`         | カスタムドメイン (例: `cloudnativedays.jp`)    | 任意             |
| `BASE_PATH`             | サブディレクトリパス (例: `/docs/`)            | 任意             |

スポンサー・タイムテーブル・セッション・ジョブボード機能（デフォルトOFF）を利用する場合は以下も参照してください:

| 変数名               | 説明                                                    | デフォルト                                 |
| --------------------- | ------------------------------------------------------- | -------------------------------------------- |
| `ENABLE_SPONSORS`     | スポンサーセクションを有効化 (`true`/`1`/`yes`/`on`)    | 無効                                        |
| `ENABLE_TIMETABLE`    | タイムテーブルページを有効化                            | 無効                                        |
| `ENABLE_SESSIONS`     | セッションページを有効化                                | 無効                                        |
| `ENABLE_JOBBOARD`     | ジョブボードページを有効化                              | 無効                                        |
| `EVENT_ABBR`          | データ取得対象イベントの略称 (`update:data` 用)        | `cndw2026`                                  |
| `DREAMKAST_API_BASE`  | Dreamkast APIのベースURL (`update:data` 用)             | `https://event.cloudnativedays.jp/api/v1`   |
| `DREAMKAST_DATA_DIR`  | スナップショットJSONの読み込み先ディレクトリ            | `src/data/dreamkast`                        |

詳細は [AGENTS.md](./AGENTS.md) の「機能フラグ」「Dreamkastデータ層」を参照してください。

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで <http://localhost:4321> を開いてください。

## 📁 ディレクトリ構造

```text
src/
├── pages/          # ページ（ファイルベースルーティング）
├── components/     # Astro/React コンポーネント
├── layouts/        # レイアウトコンポーネント
├── data/           # 静的データ
│   ├── events/     # イベント情報 (JSON)
│   ├── speakers/   # スピーカー情報 (JSON)
│   ├── talks/      # トーク情報 (JSON)
│   ├── dreamkast/           # Dreamkastスナップショット (本番データ、update:dataで生成)
│   └── dreamkast-fixtures/  # 検証用テストデータ (cnk由来、本番データ投入後に削除予定)
├── lib/            # ユーティリティ・Notion API連携
│   └── dreamkast/  # スポンサー/タイムテーブル/セッション/ジョブボードのデータ層
├── features.ts     # 機能フラグ (sponsors/timetable/sessions/jobboard)
├── types/          # TypeScript 型定義
└── styles/         # グローバルスタイル
```

## 🧞 Commands

| Command                 | Action                                                          |
| ----------------------- | ----------------------------------------------------------------- |
| `npm install`           | 依存関係のインストール                                            |
| `npm run dev`           | 開発サーバーの起動                                                |
| `npm run build`         | 本番用ビルド (`./dist/` に出力)                                   |
| `npm run preview`       | ビルド結果のプレビュー                                            |
| `npm run format`        | Prettier でコードフォーマット                                     |
| `npm run lint`          | ESLint + Prettier でコードチェック                                |
| `npm run update:data`   | Dreamkast APIから `src/data/dreamkast/` のスナップショットを更新（要ネットワーク・APIトークン、ローカル実行） |

## 🚩 機能フラグとDreamkastデータ

スポンサー・タイムテーブル・セッション・ジョブボードは `src/features.ts` の `FEATURES` によりデフォルトOFFの機能フラグで制御されています（`ENABLE_SPONSORS`/`ENABLE_TIMETABLE`/`ENABLE_SESSIONS`/`ENABLE_JOBBOARD`）。有効化するとページ生成・ナビゲーションリンク・トップページのセクションが表示されます。

データは `src/lib/dreamkast/` がビルド時に `src/data/dreamkast/`（`DREAMKAST_DATA_DIR` で変更可）配下のJSONスナップショットを読むだけで、Dreamkast APIを直接叩きません。本番データが未投入のため、動作確認には代わりにcnk（kaigi.cloudnativedays.jp）由来のテストデータ `src/data/dreamkast-fixtures/` を使えます:

```bash
ENABLE_SPONSORS=true ENABLE_TIMETABLE=true ENABLE_SESSIONS=true ENABLE_JOBBOARD=true \
  DREAMKAST_DATA_DIR=src/data/dreamkast-fixtures npm run build
```

本番データは `npm run update:data` で取得したのちコミットし、タグデプロイします。ジョブボードのみ `src/data/dreamkast/jobboard.json` を手動作成（`sponsors.json` のIDとひも付け）する必要があります。詳細は [AGENTS.md](./AGENTS.md) を参照してください。

## 📰 ブログの検索・RSS

`/posts` では MiniSearch を使ったクライアントサイド検索（`src/pages/posts/search-index.json.ts` が生成する検索インデックスを利用）が利用できます。また `/rss.xml` でRSSフィードを配信しています。旧来のページネーションは廃止し、全件表示に変更しています。

## 🚢 デプロイ

GitHub Actions を使用して自動デプロイされます。

1. タグをプッシュ (`git tag vX.X.X && git push --tags`)
2. Astro でビルド
3. S3 へ同期
4. CloudFront キャッシュ無効化

## 📝 イベントデータの追加

新しいイベントを追加する場合:

1. `src/data/events/` に新しい JSON ファイルを作成
2. `src/data/speakers/` にスピーカー情報を追加
3. `src/data/talks/` にトーク情報を追加
4. `src/data/data.ts` でデータをインポート・エクスポート

## 📚 参考リンク

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Notion API Documentation](https://developers.notion.com/)
