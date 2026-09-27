import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import FeaturedImageDownloader from './src/integrations/featured-image-downloader'
import PublicNotionCopier from './src/integrations/public-notion-copier'
import { CUSTOM_DOMAIN, BASE_PATH } from './src/server-constants'

const PRODUCTION_DOMAIN = 'cloudnativedays.jp'

const getSite = function () {
  return new URL(BASE_PATH, `https://${CUSTOM_DOMAIN || PRODUCTION_DOMAIN}`).toString()
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
    sitemap(),
  ],
  site: getSite(),
})
