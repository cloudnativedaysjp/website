import type { Speaker } from "../types/speaker";
import { CICD2021Speakers } from "./cicd2021_speakers";
import { CNDO2021Speakers } from "./cndo2021_speakers";
import { CNDT2020Speakers } from "./cndt2020_speakers";
import { CNDT2021Speakers } from "./cndt2021_speakers";
import { CNDT2022Speakers } from "./cndt2022_speakers";
import { CNSEC2022Speakers } from "./cnsec2022_speakers";
import { O11Y2022Speakers } from "./o11y2022_speakers";

export const speakerMap = new Map<string, Speaker[]>([
  ["cndt2020", CNDT2020Speakers],
  ["cndo2021", CNDO2021Speakers],
  ["cndo2021", CNDO2021Speakers],
  ["cicd2021", CICD2021Speakers],
  ["cndt2021", CNDT2021Speakers],
  ["o11y2022", O11Y2022Speakers],
  ["cnsec2022", CNSEC2022Speakers],
  ["cndt2022", CNDT2022Speakers],
]);
