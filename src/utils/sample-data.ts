import { User, Talk } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleTalkData: Talk[] = [
  { id: 101, title: 'Alice', abbr: 'cndo2021' },
  { id: 102, title: 'Bob', abbr: 'cndo2021' },
  { id: 103, title: 'Caroline', abbr: 'cndt2020' },
  { id: 104, title: 'Dave', abbr: 'cndt2020' },
]
