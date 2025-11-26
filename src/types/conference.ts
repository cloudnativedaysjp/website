export type Conference = {
  id: number
  name: string
  abbr: string
  status: string
  theme: string
  image: string
  about: string
  venue?: string // 会場名
  location?: string // 開催地（都道府県・市区町村）
  format?: 'offline' | 'online' | 'hybrid' // 開催形式
  privacy_policy: string
  privacy_policy_for_speaker: string | null
  copyright: String
  coc: String
  conferenceDays: ConferenceDay[]
}

export type ConferenceDay = {
  id: number
  date: string
  internal: boolean
}
