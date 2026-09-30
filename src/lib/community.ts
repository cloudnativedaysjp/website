// Partner community data for /community. Ported from kaigi.cloudnativedays.jp
// (src/lib/schema/community.ts + the logo glob in src/pages/community/*.astro)
// and kept schema-compatible with kaigi's src/data/community.json, so entries
// can be copied between the two sites as-is. `url` is an optional extension.
//
// Unlike Dreamkast data, this is hand-maintained: edit src/data/community.json
// and drop logo files into src/assets/community/.
import type { ImageMetadata } from 'astro'
import { z } from 'astro/zod'
import rawCommunityData from '../data/community.json'

export const communityTypeOrder = ['corporate', 'technical'] as const

export type CommunityType = (typeof communityTypeOrder)[number]

export const communityTypeLabel: Record<CommunityType, string> = {
  corporate: '企業コミュニティ',
  technical: '技術コミュニティ',
}

export const CommunitySchema = z.object({
  // Used as the URL slug: /community/{id}
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  // Filename under src/assets/community/. Empty string = no logo.
  logo: z.string(),
  description: z.string(),
  url: z.string().url().optional(),
})

export const CommunityDataSchema = z.object({
  corporate: z.array(CommunitySchema),
  technical: z.array(CommunitySchema),
})

export type Community = z.infer<typeof CommunitySchema>
export type CommunityData = z.infer<typeof CommunityDataSchema>

export const getCommunityData = (): CommunityData => {
  const data = CommunityDataSchema.parse(rawCommunityData)
  const ids = communityTypeOrder.flatMap((type) => data[type].map((c) => c.id))
  const duplicated = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (duplicated.length > 0) {
    throw new Error(
      `community.json: duplicated id(s): ${[...new Set(duplicated)].join(', ')}`,
    )
  }
  return data
}

// import.meta.glob over a missing/empty directory resolves to {}, so this is
// safe before any logos are added.
const communityLogos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/community/*.{png,jpg,jpeg,webp,svg}',
  { eager: true },
)

export const getCommunityLogo = (filename: string): ImageMetadata | null => {
  if (!filename) return null
  const logo = communityLogos[`../assets/community/${filename}`]?.default
  if (!logo) {
    throw new Error(
      `community.json: logo '${filename}' not found in src/assets/community/`,
    )
  }
  return logo
}
