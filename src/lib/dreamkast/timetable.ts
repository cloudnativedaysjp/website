// Generic timetable builder, ported from kaigi.cloudnativedays.jp
// (src/lib/timetable.ts) with the event-specific ~80% (multi-conference
// PEK/SRE machinery, track-C interleaving, KEYNOTE_CONFERENCE_OVERRIDES)
// dropped — CNDW2026 is a single-conference model, so a day maps to exactly
// one DayTimetable, not a list of per-conference sub-timetables.
import { getTalks, getTracks, getSpeakers } from './client'
import {
  days,
  trackRoomMap,
  eventLabels,
  TALK_SPEAKER_ORDER_OVERRIDES,
  type TimetableDayConfig,
  type SlotTemplate,
} from './timetable-config'
import type {
  Talk,
  Track,
  SpeakerWithLocalAssetPath,
  DayTimetable,
  TimetableSlot,
  TalkSlot,
  EventSlot,
  TimetableTalk,
  TimetableTrack,
} from './schema'

const EVENT_TYPES: ReadonlySet<string> = new Set([
  'opening',
  'keynote',
  'lunch',
  'break',
  'party',
  'closing',
])

function isEventType(type: string): type is EventSlot['type'] {
  return EVENT_TYPES.has(type)
}

function makeEventSlot(
  tmpl: Pick<SlotTemplate, 'startTime' | 'endTime'>,
  type: EventSlot['type'],
): EventSlot {
  return {
    kind: 'event',
    time: tmpl.endTime ? `${tmpl.startTime} - ${tmpl.endTime}` : `${tmpl.startTime} -`,
    startTime: tmpl.startTime,
    endTime: tmpl.endTime,
    type,
    label: eventLabels[type] ?? type,
  }
}

function sortTalkSpeakers<T extends { id: number }>(talkId: number, speakers: T[]): T[] {
  const overrideOrder = TALK_SPEAKER_ORDER_OVERRIDES[talkId]
  if (!overrideOrder) {
    return [...speakers].sort((a, b) => a.id - b.id)
  }

  const overrideRank = new Map(overrideOrder.map((speakerId, index) => [speakerId, index]))

  return [...speakers].sort((a, b) => {
    const rankA = overrideRank.get(a.id)
    const rankB = overrideRank.get(b.id)

    if (rankA !== undefined && rankB !== undefined) {
      return rankA - rankB
    }
    if (rankA !== undefined) return -1
    if (rankB !== undefined) return 1
    return a.id - b.id
  })
}

/** Speakers without a real avatar (missing or the API's dummy.png placeholder) are
 * joined without avatarUrl/localAssetPath so TimetableTalkCard falls back to a
 * placeholder icon instead of a broken image. */
function joinSpeakers(
  talkId: number,
  talkSpeakers: { id: number; name: string }[],
  speakerMap: Map<number, SpeakerWithLocalAssetPath>,
): SpeakerWithLocalAssetPath[] {
  return sortTalkSpeakers(talkId, talkSpeakers).map((s) => {
    const full = speakerMap.get(s.id)
    const hasRealAvatar = full?.avatarUrl && full.avatarUrl !== 'dummy.png'
    return {
      id: s.id,
      name: s.name,
      company: full?.company ?? undefined,
      jobTitle: full?.jobTitle ?? undefined,
      profile: full?.profile ?? undefined,
      githubId: full?.githubId ?? undefined,
      twitterId: full?.twitterId ?? undefined,
      avatarUrl: hasRealAvatar ? full.avatarUrl : undefined,
      localAssetPath: hasRealAvatar ? full.localAssetPath : undefined,
    }
  })
}

function toTimetableTalk(
  talk: Talk,
  track: Track,
  speakerMap: Map<number, SpeakerWithLocalAssetPath>,
  isKeynote: boolean,
): TimetableTalk {
  return {
    id: talk.id,
    trackId: talk.trackId,
    trackName: track.name,
    videoPlatform: talk.videoPlatform,
    videoId: talk.videoId,
    title: talk.title,
    speakers: joinSpeakers(talk.id, talk.speakers, speakerMap),
    difficulty: talk.talkDifficulty.split(' - ')[0],
    category: talk.talkCategory,
    abstract: talk.abstract,
    sponsorName: talk.sponsor?.name,
    startTime: talk.startTime,
    endTime: talk.endTime,
    isKeynote: isKeynote || undefined,
    conferenceDayDate: talk.conferenceDayDate,
    allowShowingVideo: talk.allowShowingVideo,
  }
}

/**
 * Builds a single day's timetable from the full (unfiltered) talk/track/speaker
 * snapshot plus that day's config. Talks are matched into slot templates by
 * exact HH:MM match on their startTime; unmatched event-type slots fall back
 * to a labeled placeholder bar (EventSlot).
 */
export function buildDayTimetable(
  talks: Talk[],
  tracks: Track[],
  speakers: SpeakerWithLocalAssetPath[],
  dayConfig: TimetableDayConfig,
): DayTimetable {
  const speakerMap = new Map(speakers.map((s) => [s.id, s]))

  const dayTalks = talks.filter(
    (t) => t.conferenceDayDate === dayConfig.date && t.showOnTimetable,
  )

  // Tracks ordered alphabetically by API name (API order isn't guaranteed),
  // then relabeled/room-mapped per config.
  const sortedTracks = [...tracks].sort((a, b) => a.name.localeCompare(b.name))
  const dayTracks: TimetableTrack[] = sortedTracks.map((t) => ({
    id: t.id,
    name: dayConfig.trackDisplayNames[t.name] ?? t.name,
    room: trackRoomMap[t.name] ?? t.name,
    streamKey: t.name,
  }))

  const slots: TimetableSlot[] = dayConfig.slotTemplates.map((tmpl) => {
    if (isEventType(tmpl.type)) {
      // Keynote slots can carry real talks (usually a single plenary track);
      // fall back to a labeled event bar when no matching talk exists.
      if (tmpl.type === 'keynote') {
        const keynoteTalks: TimetableTalk[] = []
        for (const talk of dayTalks) {
          if (talk.startTime.substring(11, 16) !== tmpl.startTime) continue
          const track = sortedTracks.find((t) => t.id === talk.trackId)
          if (!track) continue
          keynoteTalks.push(toTimetableTalk(talk, track, speakerMap, true))
        }
        if (keynoteTalks.length > 0) {
          return {
            kind: 'talks',
            time: tmpl.endTime ? `${tmpl.startTime} - ${tmpl.endTime}` : `${tmpl.startTime} -`,
            startTime: tmpl.startTime,
            endTime: tmpl.endTime,
            type: 'keynote',
            talks: keynoteTalks,
          } satisfies TalkSlot
        }
      }
      return makeEventSlot(tmpl, tmpl.type)
    }

    const slotTalks: TimetableTalk[] = []
    for (const talk of dayTalks) {
      if (talk.startTime.substring(11, 16) !== tmpl.startTime) continue
      const track = sortedTracks.find((t) => t.id === talk.trackId)
      if (!track) continue // safety check: talk references an unknown track
      slotTalks.push(toTimetableTalk(talk, track, speakerMap, false))
    }

    // Sort talks by track display order so grid columns line up with dayTracks.
    slotTalks.sort((a, b) => {
      const idxA = dayTracks.findIndex((t) => t.id === a.trackId)
      const idxB = dayTracks.findIndex((t) => t.id === b.trackId)
      return idxA - idxB
    })

    return {
      kind: 'talks',
      time: `${tmpl.startTime} - ${tmpl.endTime}`,
      startTime: tmpl.startTime,
      endTime: tmpl.endTime,
      type: tmpl.type as TalkSlot['type'],
      talks: slotTalks,
    } satisfies TalkSlot
  })

  return {
    date: dayConfig.date,
    label: dayConfig.label,
    tracks: dayTracks,
    slots,
  }
}

// --- Main entry point ---

let timetableDataPromise: Promise<DayTimetable[]> | null = null

/**
 * Reads the (snapshot-only) talk/track/speaker data via client.ts and builds
 * every configured day's timetable. Memoized at module scope for the
 * lifetime of the build process; on failure the memo is cleared so a
 * subsequent call can retry instead of replaying the same rejection forever
 * (kaigi pattern).
 */
export async function getTimetableData(): Promise<DayTimetable[]> {
  if (!timetableDataPromise) {
    timetableDataPromise = (async () => {
      const [talks, tracks, speakers] = await Promise.all([
        getTalks(),
        getTracks(),
        getSpeakers(),
      ])

      return days.map((dayConfig) => buildDayTimetable(talks, tracks, speakers, dayConfig))
    })()
  }

  try {
    return await timetableDataPromise
  } catch (error) {
    timetableDataPromise = null
    throw error
  }
}
