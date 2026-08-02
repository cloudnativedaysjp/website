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

// TODO(CNDW2026): 休憩枠なしの仮テンプレート。CFP/スポンサーセッションが交互に
// 並ぶkaigiの構成をそのまま流用している（本番のスロット割りに合わせて要更新）。
const slotTemplatesBodyCommon: SlotTemplate[] = [
  { startTime: '11:10', endTime: '11:40', type: 'cfp' },
  { startTime: '12:00', endTime: '12:30', type: 'sponsor' },
  { startTime: '12:50', endTime: '13:20', type: 'cfp' },
  { startTime: '13:40', endTime: '14:10', type: 'sponsor' },
  { startTime: '14:30', endTime: '15:00', type: 'cfp' },
  { startTime: '15:20', endTime: '15:50', type: 'sponsor' },
  { startTime: '16:10', endTime: '16:40', type: 'cfp' },
  { startTime: '17:00', endTime: '17:30', type: 'cfp' },
  { startTime: '17:40', endTime: '18:10', type: 'cfp' },
]

// TODO(CNDW2026): Day 1 のオープニング/キーノート枠・懇親会時刻は仮。
const slotTemplatesDay1: SlotTemplate[] = [
  { startTime: '10:00', endTime: '10:10', type: 'opening' },
  { startTime: '10:10', endTime: '10:40', type: 'keynote' },
  { startTime: '10:40', endTime: '11:00', type: 'keynote' },
  ...slotTemplatesBodyCommon,
  { startTime: '18:40', endTime: '20:30', type: 'party' },
]

// TODO(CNDW2026): Day 2 のオープニング/キーノート枠・クロージング時刻は仮。
const slotTemplatesDay2: SlotTemplate[] = [
  { startTime: '10:00', endTime: '10:10', type: 'opening' },
  { startTime: '10:10', endTime: '10:30', type: 'keynote' },
  { startTime: '10:30', endTime: '10:50', type: 'keynote' },
  ...slotTemplatesBodyCommon,
  { startTime: '18:20', endTime: '18:50', type: 'closing' },
]

// TODO(CNDW2026): トラック表示名は仮。実データのトラック名確定後に更新。
const trackDisplayNamesDay1: Record<string, string> = {
  'Track A': 'Track A',
  'Track B': 'Track B',
  'Track C': 'Track C',
}

const trackDisplayNamesDay2: Record<string, string> = {
  'Track A': 'Track A',
  'Track B': 'Track B',
  'Track C': 'Track C',
}

export const days: TimetableDayConfig[] = [
  {
    slug: 'day1',
    // TODO(CNDW2026): 日付はfixtures検証用の仮値。実データ確定後に更新。
    date: '2026-05-14',
    label: 'Day 1（5月14日・仮）',
    slotTemplates: slotTemplatesDay1,
    trackDisplayNames: trackDisplayNamesDay1,
  },
  {
    slug: 'day2',
    date: '2026-05-15',
    label: 'Day 2（5月15日・仮）',
    slotTemplates: slotTemplatesDay2,
    trackDisplayNames: trackDisplayNamesDay2,
  },
]

// TODO(CNDW2026): 会場（部屋）名は仮。実データ確定後に更新。
export const trackRoomMap: Record<string, string> = {
  'Track A': '会場A',
  'Track B': '会場B',
  'Track C': '会場C',
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
