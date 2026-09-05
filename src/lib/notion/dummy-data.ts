import type { Block, Post } from '../interfaces'

const richText = (content: string) => ({
  Text: { Content: content },
  Annotation: {
    Bold: false,
    Italic: false,
    Strikethrough: false,
    Underline: false,
    Code: false,
    Color: 'default',
  },
  PlainText: content,
})

export const DUMMY_POSTS: Post[] = [
  {
    PageId: 'dummy-post-1',
    Title: 'ダミー記事1: CloudNative Daysへようこそ',
    Icon: { Type: 'emoji', Emoji: '🚀' },
    Cover: null,
    Slug: 'dummy-post-1',
    Date: '2024-01-03',
    Tags: [{ id: 'dummy-tag-1', name: 'お知らせ', color: 'blue' }],
    Excerpt:
      'これはUSE_DUMMY_POSTS有効時に表示されるダミー記事です。実際のNotionの記事ではありません。',
    FeaturedImage: null,
    Rank: 1,
  },
  {
    PageId: 'dummy-post-2',
    Title: 'ダミー記事2: セッション情報の見方',
    Icon: { Type: 'emoji', Emoji: '📅' },
    Cover: null,
    Slug: 'dummy-post-2',
    Date: '2024-01-02',
    Tags: [{ id: 'dummy-tag-2', name: 'イベント', color: 'green' }],
    Excerpt:
      'ローカル開発でNotionにアクセスできない場合でも、ブログ関連の画面を確認できるようにするためのダミー記事です。',
    FeaturedImage: null,
    Rank: 2,
  },
  {
    PageId: 'dummy-post-3',
    Title: 'ダミー記事3: コミュニティ運営について',
    Icon: { Type: 'emoji', Emoji: '📝' },
    Cover: null,
    Slug: 'dummy-post-3',
    Date: '2024-01-01',
    Tags: [
      { id: 'dummy-tag-1', name: 'お知らせ', color: 'blue' },
      { id: 'dummy-tag-3', name: 'コミュニティ', color: 'yellow' },
    ],
    Excerpt:
      '本番環境ではUSE_DUMMY_POSTS=falseを指定し、Notionから実際の記事を取得します。',
    FeaturedImage: null,
    Rank: 3,
  },
]

const buildDummyBlocks = (pageId: string): Block[] => [
  {
    Id: `${pageId}-block-1`,
    Type: 'paragraph',
    HasChildren: false,
    Paragraph: {
      RichTexts: [
        richText(
          'これはダミー記事の本文です。USE_DUMMY_POSTS環境変数を無効にすると、Notionから実際の記事内容が取得されます。',
        ),
      ],
      Color: 'default',
    },
  },
]

export const DUMMY_BLOCKS_BY_PAGE_ID: Record<string, Block[]> =
  Object.fromEntries(
    DUMMY_POSTS.map((post) => [post.PageId, buildDummyBlocks(post.PageId)]),
  )
