import type { Talk } from "../types/talk";
import { CNDT2022Talks } from "./cndt2022_talks";
import { CNSEC2022Talks } from "./cnsec2022_talks";

export const talkMap = new Map<string, Talk[]>([
  ["cndt2022", CNDT2022Talks],
  ["cnsec2022", CNSEC2022Talks],
]);
