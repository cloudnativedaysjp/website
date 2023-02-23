import type { Speaker } from "../types/speaker";
import { CNDT2022Speakers } from "./cndt2022_speakers";

export const speakerMap = new Map<string, Speaker[]>([
  ["cndt2022", CNDT2022Speakers],
]);
