import { parseBooleanEnv } from './lib/utils'

export const FEATURES = {
  sponsors: parseBooleanEnv(
    import.meta.env.ENABLE_SPONSORS || process.env.ENABLE_SPONSORS,
    false,
  ),
  timetable: parseBooleanEnv(
    import.meta.env.ENABLE_TIMETABLE || process.env.ENABLE_TIMETABLE,
    false,
  ),
  sessions: parseBooleanEnv(
    import.meta.env.ENABLE_SESSIONS || process.env.ENABLE_SESSIONS,
    false,
  ),
  jobboard: parseBooleanEnv(
    import.meta.env.ENABLE_JOBBOARD || process.env.ENABLE_JOBBOARD,
    false,
  ),
  blog: true,
} as const
