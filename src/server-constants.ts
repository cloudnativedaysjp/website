import { parseBooleanEnv } from './lib/utils'

export const NOTION_API_SECRET =
  import.meta.env.NOTION_API_SECRET || process.env.NOTION_API_SECRET || ''
export const DATABASE_ID =
  import.meta.env.DATABASE_ID || process.env.DATABASE_ID || ''

// ローカル開発では既定でNotion APIを叩かずダミー記事を表示する（Notion未接続でも
// ブログ関連機能を触れるようにするため）。本番ビルドではCI側でfalseを指定し、
// 実データ取得に失敗したらビルド自体を失敗させる。
export const USE_DUMMY_POSTS = parseBooleanEnv(
  import.meta.env.USE_DUMMY_POSTS || process.env.USE_DUMMY_POSTS,
  true,
)

export const CUSTOM_DOMAIN =
  import.meta.env.CUSTOM_DOMAIN || process.env.CUSTOM_DOMAIN || '' // <- Set your costom domain if you have. e.g. alpacat.com
export const BASE_PATH =
  import.meta.env.BASE_PATH || process.env.BASE_PATH || '' // <- Set sub directory path if you want. e.g. /docs/

export const PUBLIC_GA_TRACKING_ID = import.meta.env.PUBLIC_GA_TRACKING_ID
export const NUMBER_OF_POSTS_PER_PAGE = 5
export const REQUEST_TIMEOUT_MS = parseInt(
  import.meta.env.REQUEST_TIMEOUT_MS || '10000',
  10,
)
export const ENABLE_LIGHTBOX = import.meta.env.ENABLE_LIGHTBOX

export const PUBLIC_SITE_TITLE = 'CloudNative Days'
export const PUBLIC_SITE_DESCRIPTION =
  '日本最大のCloud Native技術の祭典 CloudNative DaysのWebサイトです'

export const EVENT_ABBR =
  import.meta.env.EVENT_ABBR || process.env.EVENT_ABBR || 'cndw2026'
export const DREAMKAST_API_BASE =
  import.meta.env.DREAMKAST_API_BASE ||
  process.env.DREAMKAST_API_BASE ||
  'https://event.cloudnativedays.jp/api/v1'
export const DREAMKAST_DATA_DIR =
  import.meta.env.DREAMKAST_DATA_DIR ||
  process.env.DREAMKAST_DATA_DIR ||
  'src/data/dreamkast'
