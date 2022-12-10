export type Conference = {
  id: number
  name: string
  abbr: string
  status: string
  theme: string
  about: string
  privacy_policy: string
  conferenceDays: ConferenceDay[]
}

export type ConferenceDay = {
  id: number
  date: string
  internal: boolean
}
