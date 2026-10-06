// CNDW2026-specific timetable configuration, ported from
// kaigi.cloudnativedays.jp (src/lib/timetable.ts). Everything in this file is
// event-specific (dates, slot times, track/room naming) as opposed to
// timetable.ts, which is the generic builder.
//
// TODO(CNDW2026): 実データ確定後に更新 — dates, slot times, track display
// names and room mapping below are all placeholders copied from kaigi's
// schedule shape so the feature is buildable/verifiable against the
// dreamkast-fixtures snapshot (which itself carries kaigi's talk data with
// conferenceDayDate rewritten to 2026-05-14/15). None of this reflects the
// real CNDW2026 program yet.
import type { TalkSlot, EventSlot } from './schema'

export type SlotTemplateType = TalkSlot['type'] | EventSlot['type']

export interface SlotTemplate {
  startTime: string
  endTime: string
  type: SlotTemplateType
}

export interface TimetableDayConfig {
  /** URL slug, e.g. 'day1' -> /timetable/day1 */
  slug: string
  /** Must match Talk.conferenceDayDate in the snapshot for this day's talks to resolve. */
  date: string
  /** Tab / heading label. */
  label: string
  slotTemplates: SlotTemplate[]
  /** Maps the API Track.name (e.g. "Track A") to a display name for this day. */
  trackDisplayNames: Record<string, string>
}

// 実データ（Dreamkast talks）の開始時刻に合わせたスロット。talkは開始時刻のHH:MM完全一致で
// スロットに入る。4枠目（15:20〜16:30付近）は現時点でトーク未登録のため定義していない。
// TODO(CNDW2026): オープニング/ランチ/休憩/懇親会/クロージングの時刻は未確定のため未定義。
const slotTemplatesBodyCommon: SlotTemplate[] = [
  { startTime: '13:10', endTime: '13:40', type: 'cfp' },
  { startTime: '14:00', endTime: '14:30', type: 'sponsor' },
  { startTime: '14:50', endTime: '15:20', type: 'cfp' },
  { startTime: '15:40', endTime: '16:10', type: 'sponsor' },
  { startTime: '16:30', endTime: '17:00', type: 'cfp' },
  { startTime: '17:20', endTime: '17:50', type: 'cfp' },
]

const slotTemplatesDay1: SlotTemplate[] = [
  { startTime: '10:30', endTime: '10:50', type: 'keynote' },
  { startTime: '10:50', endTime: '11:10', type: 'keynote' },
  { startTime: '11:10', endTime: '11:30', type: 'keynote' },
  { startTime: '11:30', endTime: '11:50', type: 'sponsor' },
  { startTime: '11:50', endTime: '12:10', type: 'sponsor' },
  ...slotTemplatesBodyCommon,
]

const slotTemplatesDay2: SlotTemplate[] = [
  { startTime: '10:30', endTime: '10:50', type: 'keynote' },
  { startTime: '10:50', endTime: '11:10', type: 'keynote' },
  { startTime: '11:10', endTime: '11:30', type: 'sponsor' },
  { startTime: '11:30', endTime: '11:50', type: 'sponsor' },
  { startTime: '11:50', endTime: '12:10', type: 'sponsor' },
  ...slotTemplatesBodyCommon,
]

// APIのトラック名（"A"〜"D"）をキーにする。
// TODO(CNDW2026): 表示名・会場名は仮。
const trackDisplayNames: Record<string, string> = {
  A: 'Track A',
  B: 'Track B',
  C: 'Track C',
  D: 'Track D',
}
const trackDisplayNamesDay1 = trackDisplayNames
const trackDisplayNamesDay2 = trackDisplayNames

export const days: TimetableDayConfig[] = [
  {
    slug: 'day1',
    date: '2026-11-18',
    label: 'Day 1（11月18日）',
    slotTemplates: slotTemplatesDay1,
    trackDisplayNames: trackDisplayNamesDay1,
  },
  {
    slug: 'day2',
    date: '2026-11-19',
    label: 'Day 2（11月19日）',
    slotTemplates: slotTemplatesDay2,
    trackDisplayNames: trackDisplayNamesDay2,
  },
]

// TODO(CNDW2026): 会場（部屋）名は仮。実データ確定後に更新。
export const trackRoomMap: Record<string, string> = {
  A: 'Room1',
  B: 'Room2',
  C: 'Boardroom',
  D: 'Room6',
}

export const eventLabels: Record<string, string> = {
  opening: 'オープニング',
  keynote: 'キーノート',
  lunch: 'ランチ',
  break: '休憩',
  party: '懇親会',
  closing: 'クロージング',
}

/**
 * Cheap escape hatch for talks whose speaker array needs a specific display
 * order that differs from sorting by speaker id (kaigi hardcoded one such
 * case). Keyed by Talk.id -> ordered array of Speaker.id. Empty until a real
 * case is found in CNDW2026 data.
 */
export const TALK_SPEAKER_ORDER_OVERRIDES: Record<number, number[]> = {}
