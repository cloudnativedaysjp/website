// Sponsor logo / speaker avatar resolution, plus the sponsor-tier helpers that
// were duplicated across kaigi.cloudnativedays.jp's Sponsors.astro and
// jobboard/index.astro (getPrimarySponsorType / groupSponsorsByType).
import type { ImageMetadata } from 'astro'
import { sponsorTypeOrder, type Sponsor, type SponsorType } from './schema'

type GlobResult = Record<string, { default: ImageMetadata }>

// import.meta.glob over a missing/empty directory resolves to {} rather than
// throwing, so real-data and fixture globs are always safe to merge — even
// before src/assets/dreamkast/{sponsors,speakers} exist (they're created
// lazily by scripts/update-data.ts).
const buildBasenameMap = (
  ...globResults: GlobResult[]
): Map<string, ImageMetadata> => {
  const map = new Map<string, ImageMetadata>()
  for (const globResult of globResults) {
    for (const [key, mod] of Object.entries(globResult)) {
      const basename = key.split('/').pop()
      if (basename) map.set(basename, mod.default)
    }
  }
  return map
}

// Fixtures are merged first so real data (once populated) takes precedence
// on a basename collision.
const sponsorLogoMap = buildBasenameMap(
  import.meta.glob<{ default: ImageMetadata }>(
    '../../data/dreamkast-fixtures/sponsors-logos/*',
    { eager: true },
  ),
  import.meta.glob<{ default: ImageMetadata }>(
    '../../assets/dreamkast/sponsors/*',
    { eager: true },
  ),
)

const speakerAvatarMap = buildBasenameMap(
  import.meta.glob<{ default: ImageMetadata }>(
    '../../data/dreamkast-fixtures/speaker-avatars/*',
    { eager: true },
  ),
  import.meta.glob<{ default: ImageMetadata }>(
    '../../assets/dreamkast/speakers/*',
    { eager: true },
  ),
)

export const getSponsorLogo = (
  localAssetPath: string,
): ImageMetadata | undefined => sponsorLogoMap.get(localAssetPath)

export const getSpeakerAvatar = (
  localAssetPath: string,
): ImageMetadata | undefined => speakerAvatarMap.get(localAssetPath)

// --- Sponsor tier helpers ---

/** A sponsor can hold multiple tiers (e.g. ["Diamond", "Booth"]); this picks
 * the highest-ranked one per sponsorTypeOrder. */
export const getPrimarySponsorType = (
  sponsor: Pick<Sponsor, 'sponsorType'>,
): SponsorType =>
  sponsorTypeOrder.find((type) => sponsor.sponsorType.includes(type)) ??
  sponsor.sponsorType[0]

/** Groups sponsors by every tier they hold (a multi-tier sponsor appears in
 * more than one group), in sponsorTypeOrder, dropping empty groups. */
export const groupSponsorsByType = <T extends Pick<Sponsor, 'sponsorType'>>(
  sponsors: T[],
): { type: SponsorType; sponsors: T[] }[] =>
  sponsorTypeOrder
    .map((type) => ({
      type,
      sponsors: sponsors.filter((s) => s.sponsorType.includes(type)),
    }))
    .filter(({ sponsors }) => sponsors.length > 0)

export const sponsorTypeAccent: Record<SponsorType, string> = {
  Diamond: 'text-indigo-700',
  Platinum: 'text-gray-700',
  Gold: 'text-amber-600',
  Support: 'text-gray-600',
  Booth: 'text-gray-600',
  Party: 'text-gray-600',
  CM: 'text-gray-600',
  Logo: 'text-gray-600',
  Media: 'text-gray-600',
  Tool: 'text-gray-600',
}
