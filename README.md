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
│   └── talks/      # トーク情報 (JSON)
├── lib/            # ユーティリティ・Notion API連携
├── types/          # TypeScript 型定義
└── styles/         # グローバルスタイル
```

## 🧞 Commands

| Command                 | Action                                 |
| ----------------------- | -------------------------------------- |
| `npm install`           | 依存関係のインストール                 |
| `npm run dev`           | 開発サーバーの起動                     |
| `npm run build`         | 本番用ビルド (`./dist/` に出力)        |
| `npm run build:cached`  | キャッシュ取得後にビルド               |
| `npm run preview`       | ビルド結果のプレビュー                 |
| `npm run format`        | Prettier でコードフォーマット          |
| `npm run lint`          | ESLint + Prettier でコードチェック     |
| `npm run cache:fetch`   | Notion からブログキャッシュを取得      |
| `npm run cache:purge`   | キャッシュのクリア                     |

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
