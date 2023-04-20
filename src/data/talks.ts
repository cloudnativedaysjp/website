import type { Talk } from '../types/talk'
import { CICD2021Talks } from './cicd2021_talks'
import { CNDO2021Talks } from './cndo2021_talks'
import { CNDT2020Talks } from './cndt2020_talks'
import { CNDT2021Talks } from './cndt2021_talks'
import { CNDT2022Talks } from './cndt2022_talks'
import { CNSEC2022Talks } from './cnsec2022_talks'
import { O11Y2022Talks } from './o11y2022_talks'
import { CICD2023Talks } from './cicd2023_talks'

export const talkMap = new Map<string, Talk[]>([
  ['cndt2020', CNDT2020Talks],
  ['cndo2021', CNDO2021Talks],
  ['cndo2021', CNDO2021Talks],
  ['cicd2021', CICD2021Talks],
  ['cndt2021', CNDT2021Talks],
  ['o11y2022', O11Y2022Talks],
  ['cnsec2022', CNSEC2022Talks],
  ['cndt2022', CNDT2022Talks],
  ['cicd2023', CICD2023Talks],
])
