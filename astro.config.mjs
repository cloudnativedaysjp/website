import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import FeaturedImageDownloader from './src/integrations/featured-image-downloader'
import PublicNotionCopier from './src/integrations/public-notion-copier'
import { CUSTOM_DOMAIN, BASE_PATH } from './src/server-constants'

const getSite = function () {
  if (!process.env.CF_PAGES) {
    return new URL(BASE_PATH, 'http://localhost:3000').toString()
  }
  if (process.env.CF_PAGES_BRANCH !== 'main') {
    return new URL(BASE_PATH, process.env.CF_PAGES_URL).toString()
  }
  if (CUSTOM_DOMAIN) {
    return new URL(BASE_PATH, `https://${CUSTOM_DOMAIN}`).toString()
  }
  return new URL(
    BASE_PATH,
    `https://${new URL(process.env.CF_PAGES_URL).host
      .split('.')
      .slice(1)
      .join('.')}`,
  ).toString()
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    FeaturedImageDownloader(),
    PublicNotionCopier(),
    mdx(),
    icon({
      include: {
        tabler: ["*"]
      }
    }),
  ],
  site: getSite(),
})
