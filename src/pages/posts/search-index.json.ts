import { getAllPosts, getAllBlocksByBlockId } from '../../lib/notion/client'
import { extractPlainText } from '../../lib/notion/block-text'
import { toSearchDocument } from '../../lib/blog-search'

export const prerender = true

export async function GET() {
  const posts = await getAllPosts()

  const docs = await Promise.all(
    posts.map(async (post) => {
      const blocks = await getAllBlocksByBlockId(post.PageId)
      const contentText = extractPlainText(blocks)
      return toSearchDocument(post, contentText)
    }),
  )

  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}
