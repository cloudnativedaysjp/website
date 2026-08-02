// Adapted from kaigi.cloudnativedays.jp (src/lib/requests.ts).
//
// Two halves, kept in one module because they share schemas/types:
// - Read path (getSponsors/getTalks/getTracks/getSpeakers/getJobboardEntries):
//   used by pages at build time. Reads committed snapshot JSON only — no
//   network access, so `npm run build` works without a Dreamkast API token.
// - API path (fetch*FromApi / download*Images): used only by
//   scripts/update-data.ts to refresh the snapshots + local image assets.
import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'astro/zod'
import {
  SponsorSchema,
  SponsorWithLocalAssetPathSchema,
  TalkSchema,
  TrackSchema,
  SpeakerSchema,
  SpeakerWithLocalAssetPathSchema,
  JobboardEntrySchema,
  type Sponsor,
  type SponsorWithLocalAssetPath,
  type Talk,
  type Track,
  type Speaker,
  type SpeakerWithLocalAssetPath,
  type JobboardEntry,
} from './schema'
import { downloadImage } from './image-downloader'
import {
  DREAMKAST_DATA_DIR,
  EVENT_ABBR,
  DREAMKAST_API_BASE,
} from '../../server-constants'

// --- Read path (snapshot-only, no network) ---

const readSnapshot = async <T>(
  filename: string,
  schema: z.ZodType<T>,
): Promise<T> => {
  const filePath = path.join(process.cwd(), DREAMKAST_DATA_DIR, filename)
  let content: string
  try {
    content = await fs.readFile(filePath, 'utf-8')
  } catch {
    throw new Error(
      `${filename} not found in ${DREAMKAST_DATA_DIR} — run 'npm run update:data' or set DREAMKAST_DATA_DIR=src/data/dreamkast-fixtures`,
    )
  }
  return schema.parse(JSON.parse(content))
}

export const getSponsors = (): Promise<SponsorWithLocalAssetPath[]> =>
  readSnapshot('sponsors.json', z.array(SponsorWithLocalAssetPathSchema))

export const getTalks = (): Promise<Talk[]> =>
  readSnapshot('talks.json', z.array(TalkSchema))

export const getTracks = (): Promise<Track[]> =>
  readSnapshot('tracks.json', z.array(TrackSchema))

export const getSpeakers = (): Promise<SpeakerWithLocalAssetPath[]> =>
  readSnapshot('speakers.json', z.array(SpeakerWithLocalAssetPathSchema))

export const getJobboardEntries = (): Promise<JobboardEntry[]> =>
  readSnapshot('jobboard.json', z.array(JobboardEntrySchema))

// --- API path (scripts/update-data.ts only) ---

const apiUrl = (resource: string): string =>
  `${DREAMKAST_API_BASE}/${resource}?eventAbbr=${EVENT_ABBR}`

/**
 * Fetches an array resource from the Dreamkast API and parses it item-by-item,
 * skipping invalid entries with a warning instead of failing the whole batch.
 * In CI (GITHUB_ACTIONS), any warning is escalated to a thrown error so bad
 * data doesn't silently ship.
 */
const fetchArrayLeniently = async <T>(
  resource: string,
  itemSchema: z.ZodType<T>,
  itemLabel: (item: unknown) => string,
): Promise<T[]> => {
  const res = await fetch(apiUrl(resource))
  if (!res.ok) {
    throw new Error(`Failed to fetch ${resource}: ${res.status}`)
  }
  const raw = await res.json()
  const rawArray = z.array(z.unknown()).parse(raw)

  const items: T[] = []
  const warnings: string[] = []
  for (const [i, item] of rawArray.entries()) {
    const result = itemSchema.safeParse(item)
    if (result.success) {
      items.push(result.data)
    } else {
      warnings.push(
        `Skipping invalid ${resource} entry at index ${i} (${itemLabel(item)})`,
      )
    }
  }
  if (warnings.length > 0) {
    for (const w of warnings) console.warn(w)
    if (process.env.GITHUB_ACTIONS) {
      throw new Error(
        `Invalid ${resource} data detected in CI:\n${warnings.map((w) => `- ${w}`).join('\n')}`,
      )
    }
  }
  return items
}

const nameOf = (item: unknown): string =>
  `name: ${(item as Record<string, unknown>)?.name ?? 'unknown'}`
const idOf = (item: unknown): string =>
  `id: ${(item as Record<string, unknown>)?.id ?? 'unknown'}`

export const fetchSponsorsFromApi = (): Promise<Sponsor[]> =>
  fetchArrayLeniently('sponsors', SponsorSchema, nameOf)

export const fetchTalksFromApi = (): Promise<Talk[]> =>
  fetchArrayLeniently('talks', TalkSchema, idOf)

export const fetchTracksFromApi = (): Promise<Track[]> =>
  fetchArrayLeniently('tracks', TrackSchema, idOf)

export const fetchSpeakersFromApi = (): Promise<Speaker[]> =>
  fetchArrayLeniently('speakers', SpeakerSchema, nameOf)

/**
 * Downloads sponsor logos to src/assets/dreamkast/sponsors, reusing ETags to
 * skip unchanged images (304). Returns sponsors annotated with localAssetPath
 * and the updated ETag map.
 */
export const downloadSponsorImages = async (
  sponsors: Sponsor[],
  etagMap: Record<string, string> = {},
): Promise<{
  sponsors: SponsorWithLocalAssetPath[]
  etagMap: Record<string, string>
}> => {
  const results = await Promise.allSettled(
    sponsors.map(async (sponsor) => {
      if (sponsor.logo_url) {
        const originalUrl = sponsor.logo_url
        const u = new URL(originalUrl)
        // Remove unnecessary query parameters
        const logoUrl = u.origin + u.pathname
        const previousEtag = etagMap[logoUrl]

        const result = await downloadImage(
          originalUrl,
          'src/assets/dreamkast/sponsors',
          `${sponsor.id}`,
          previousEtag,
        )

        if (!result) {
          throw new Error(
            `downloadImage returned null: sponsorId=${sponsor.id} url=${originalUrl}`,
          )
        }

        const sponsorWithLocalAssetPath = {
          ...sponsor,
          logo_url: logoUrl,
          localAssetPath: result.filename,
        }
        if (result.etag) {
          etagMap[logoUrl] = result.etag
        }
        return sponsorWithLocalAssetPath
      }
    }),
  )

  const successfulSponsors = results
    .filter(
      (r): r is PromiseFulfilledResult<SponsorWithLocalAssetPath | undefined> =>
        r.status === 'fulfilled',
    )
    .map((r) => r.value)
    .filter((s): s is SponsorWithLocalAssetPath => s !== undefined)

  const failures = results
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => r.status === 'rejected')
    .map(({ r, i }) => {
      const sponsor = sponsors[i]
      const reason = (r as PromiseRejectedResult).reason
      const msg = reason instanceof Error ? reason.message : String(reason)
      return `- sponsorId=${sponsor?.id} name=${sponsor?.name ?? 'unknown'}: ${msg}`
    })

  if (failures.length > 0) {
    throw new Error(
      `Failed to download sponsor images:\n${failures.join('\n')}`,
    )
  }
  return { sponsors: successfulSponsors, etagMap }
}

/**
 * Downloads speaker avatars to src/assets/dreamkast/speakers, reusing ETags
 * to skip unchanged images (304). Speakers without a real avatarUrl (missing
 * or the API's dummy.png placeholder) are passed through unchanged.
 */
export const downloadSpeakerImages = async (
  speakers: Speaker[],
  etagMap: Record<string, string> = {},
): Promise<{
  speakers: SpeakerWithLocalAssetPath[]
  etagMap: Record<string, string>
}> => {
  const results = await Promise.allSettled(
    speakers.map(async (speaker) => {
      if (speaker.avatarUrl) {
        const originalUrl = speaker.avatarUrl
        let avatarUrl = originalUrl

        if (
          !originalUrl.startsWith('http') ||
          originalUrl.includes('dummy.png')
        ) {
          return speaker as SpeakerWithLocalAssetPath
        }

        try {
          const u = new URL(originalUrl)
          // Remove unnecessary query parameters
          avatarUrl = u.origin + u.pathname
        } catch {
          // Keep originalUrl if not a valid URL
        }

        const previousEtag = etagMap[avatarUrl]

        const result = await downloadImage(
          originalUrl,
          'src/assets/dreamkast/speakers',
          `${speaker.id}`,
          previousEtag,
        )

        if (!result) {
          throw new Error(
            `downloadImage returned null: speakerId=${speaker.id} url=${originalUrl}`,
          )
        }

        const speakerWithLocalAssetPath = {
          ...speaker,
          avatarUrl,
          localAssetPath: result.filename,
        }
        if (result.etag) {
          etagMap[avatarUrl] = result.etag
        }
        return speakerWithLocalAssetPath
      }
      return speaker as SpeakerWithLocalAssetPath
    }),
  )

  const successfulSpeakers = results
    .filter(
      (r): r is PromiseFulfilledResult<SpeakerWithLocalAssetPath> =>
        r.status === 'fulfilled',
    )
    .map((r) => r.value)

  const failures = results
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => r.status === 'rejected')
    .map(({ r, i }) => {
      const speaker = speakers[i]
      const reason = (r as PromiseRejectedResult).reason
      const msg = reason instanceof Error ? reason.message : String(reason)
      return `- speakerId=${speaker?.id} name=${speaker?.name ?? 'unknown'}: ${msg}`
    })

  if (failures.length > 0) {
    throw new Error(
      `Failed to download speaker images:\n${failures.join('\n')}`,
    )
  }
  return { speakers: successfulSpeakers, etagMap }
}
