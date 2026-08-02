import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '../lib/notion/client'
import { getPostLink } from '../lib/blog-helpers'
import { PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION } from '../server-constants'

export async function GET(context: APIContext) {
  const posts = await getAllPosts()

  return rss({
    title: `${PUBLIC_SITE_TITLE} Blog`,
    description: PUBLIC_SITE_DESCRIPTION,
    site: context.site ?? 'https://cloudnativedays.jp',
    items: posts.map((post) => ({
      title: post.Title,
      description: post.Excerpt,
      pubDate: new Date(post.Date),
      link: getPostLink(post.Slug),
    })),
    customData: '<language>ja</language>',
  })
}
