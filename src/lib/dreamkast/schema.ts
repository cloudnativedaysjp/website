// Ported from kaigi.cloudnativedays.jp (src/lib/schema/*), adapted for CNDW2026:
// - zod v4 syntax converted to zod v3 (astro/zod bundles zod ^3.25, no z.url()).
// - Multi-conference (PEK/SRE) machinery dropped: CNDW2026 is a single conference,
//   so ConferenceTimetable collapses into the per-day shape directly.
// - sponsorTypeColor (kaigi's custom Tailwind v4 palette) dropped; see assets.ts
//   for CNDW2026's tier accent colors instead.
//
// Do not import from/into src/types/ — those are past-event types (Talk/Speaker/
// Conference) with colliding names. This namespace stays self-contained.
import { z } from 'astro/zod'

// --- Sponsor ---

export const sponsorTypeOrder = [
  'Support',
  'Diamond',
  'Platinum',
  'Gold',
  'Booth',
  'Party',
  'CM',
  'Logo',
  'Media',
  'Tool',
] as const

export const SponsorTypeSchema = z.enum(sponsorTypeOrder)
export type SponsorType = z.infer<typeof SponsorTypeSchema>

export const sponsorTypeLabel: Record<SponsorType, string> = {
  Support: '後援',
  Diamond: 'ダイヤモンド',
  Platinum: 'プラチナ',
  Gold: 'ゴールド',
  Booth: 'ブース',
  Logo: 'ロゴ',
  CM: 'CM',
  Party: '懇親会',
  Media: 'メディア',
  Tool: 'ツール',
}

export const SponsorSchema = z.object({
  id: z.number().int(),
  eventAbbr: z.string(),
  name: z.string(),
  abbr: z.string(),
  url: z.string().url(),
  logo_url: z.string(),
  sponsorType: z.array(SponsorTypeSchema),
})

export const SponsorWithLocalAssetPathSchema = SponsorSchema.extend({
  localAssetPath: z.string(),
})

export type Sponsor = z.infer<typeof SponsorSchema>
export type SponsorWithLocalAssetPath = z.infer<
  typeof SponsorWithLocalAssetPathSchema
>

// --- Speaker ---

export const SpeakerSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  company: z.string().nullable().optional(),
  jobTitle: z.string().nullable().optional(),
  profile: z.string().nullable().optional(),
  githubId: z.string().nullable().optional(),
  twitterId: z.string().nullable().optional(),
  avatarUrl: z.string().nullable().optional(),
})

export const SpeakerWithLocalAssetPathSchema = SpeakerSchema.extend({
  localAssetPath: z.string().optional(),
})

export const TalkSpeakerSchema = SpeakerSchema.pick({ id: true, name: true })

export type Speaker = z.infer<typeof SpeakerSchema>
export type SpeakerWithLocalAssetPath = z.infer<
  typeof SpeakerWithLocalAssetPathSchema
>
export type TalkSpeaker = z.infer<typeof TalkSpeakerSchema>

// --- Track ---

export const TrackSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  videoPlatform: z.string().nullable().optional(),
  videoId: z.string().nullable().optional(),
  onAirTalk: z.unknown().nullable().optional(),
})

export type Track = z.infer<typeof TrackSchema>

export interface TimetableTrack {
  id: number
  name: string
  room: string
  streamKey: string
}

// --- Talk ---

export const TalkSponsorSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export const TalkSchema = z.object({
  id: z.number().int(),
  conferenceId: z.number().int(),
  trackId: z.number().int(),
  videoPlatform: z.string().nullable().optional(),
  videoId: z.string().nullable().optional(),
  title: z.string(),
  abstract: z.string(),
  speakers: z.array(TalkSpeakerSchema),
  dayId: z.number().int(),
  showOnTimetable: z.boolean(),
  startTime: z.string(),
  endTime: z.string(),
  talkDuration: z.number(),
  talkDifficulty: z.string(),
  talkCategory: z.string(),
  conferenceDayDate: z.string(),
  slotNum: z.number().int(),
  allowShowingVideo: z.boolean(),
  sponsor: TalkSponsorSchema.nullable().optional(),
})

export type Talk = z.infer<typeof TalkSchema>

// --- Jobboard ---

export const JobboardEntrySchema = z.object({
  id: z.number().int(),
  description: z.string(),
})

export type JobboardEntry = z.infer<typeof JobboardEntrySchema>

// --- App-level timetable types (builder itself is Phase 3) ---

export interface TimetableTalk {
  id: number
  trackId: number
  trackName: string
  videoPlatform?: string | null
  videoId?: string | null
  title: string
  speakers: SpeakerWithLocalAssetPath[]
  difficulty: string
  category: string
  abstract: string
  sponsorName?: string
  startTime: string
  endTime: string
  isKeynote?: boolean
  conferenceDayDate: string
  allowShowingVideo: boolean
}

/** トークが入る枠（CFP / スポンサーセッション / キーノート） */
export interface TalkSlot {
  kind: 'talks'
  time: string
  startTime: string
  endTime: string | null
  type: 'cfp' | 'sponsor' | 'keynote'
  talks: TimetableTalk[]
}

/** トークではないイベント枠（Opening / Keynote / Lunch / 懇親会 / Closing） */
export interface EventSlot {
  kind: 'event'
  time: string
  startTime: string
  endTime: string | null
  type: 'opening' | 'keynote' | 'lunch' | 'break' | 'party' | 'closing'
  label: string
}

export type TimetableSlot = TalkSlot | EventSlot

/** 単一カンファレンスモデルのため、kaigiの ConferenceTimetable は
 * tracks/slots のみの形に縮約し、DayTimetable がそれを直接内包する。 */
export interface ConferenceTimetable {
  tracks: TimetableTrack[]
  slots: TimetableSlot[]
}

export interface DayTimetable extends ConferenceTimetable {
  date: string
  label: string
}
