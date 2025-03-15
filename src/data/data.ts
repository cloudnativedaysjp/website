import fs from 'fs'
import type { Talk } from '../types/talk'
import type { Speaker } from '../types/speaker'
import type { Conference } from '../types/conference'

const events = [
  'cndt2020',
  'cndo2021',
  'cndo2021',
  'cicd2021',
  'cndt2021',
  'o11y2022',
  'cnsec2022',
  'cndt2022',
  'cicd2023',
  'cndf2023',
  'cndt2023',
  'cnds2024',
  'cndw2024',
  'cnds2025',
]

export const Conferences: Conference[] = events.map((eventName) => {
  const rawData = fs.readFileSync(`src/data/events/${eventName}.json`, 'utf-8')
  const event: Conference = JSON.parse(rawData)
  return event
})

export const talkMap = new Map<string, Talk[]>(
  events.map((eventName) => {
    const rawData = fs.readFileSync(`src/data/talks/${eventName}.json`, 'utf-8')
    const talks: Talk[] = JSON.parse(rawData)
    return [eventName, talks]
  }),
)

export const speakerMap = new Map<string, Speaker[]>(
  events.map((eventName) => {
    const rawData = fs.readFileSync(
      `src/data/speakers/${eventName}.json`,
      'utf-8',
    )
    const speakers: Speaker[] = JSON.parse(rawData)
    return [eventName, speakers]
  }),
)
