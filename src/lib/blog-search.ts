import type { Post } from './interfaces'
import { stripMarkdown, type BlogSearchDocument } from './search-utils'

export function toSearchDocument(
  post: Post,
  contentText: string,
): BlogSearchDocument {
  return {
    slug: post.Slug,
    title: stripMarkdown(post.Title),
    description: stripMarkdown(post.Excerpt ?? ''),
    content: stripMarkdown(contentText),
    pubDate: post.Date,
  }
}
