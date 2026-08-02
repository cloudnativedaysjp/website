// NOTE: during Astro's static build, esbuild can constant-fold
// `import.meta.env.X || process.env.X` down to the raw (unquoted) value known
// at build time, which may surface as a boolean instead of a string. Coerce
// via String() defensively so `.trim()` never blows up on a non-string.
const parseFlag = (
  raw: string | boolean | undefined,
  defaultValue: boolean,
): boolean => {
  if (raw === undefined || raw === '') return defaultValue
  return ['true', '1', 'yes', 'on'].includes(String(raw).trim().toLowerCase())
}

export const FEATURES = {
  sponsors: parseFlag(
    import.meta.env.ENABLE_SPONSORS || process.env.ENABLE_SPONSORS,
    false,
  ),
  timetable: parseFlag(
    import.meta.env.ENABLE_TIMETABLE || process.env.ENABLE_TIMETABLE,
    false,
  ),
  sessions: parseFlag(
    import.meta.env.ENABLE_SESSIONS || process.env.ENABLE_SESSIONS,
    false,
  ),
  jobboard: parseFlag(
    import.meta.env.ENABLE_JOBBOARD || process.env.ENABLE_JOBBOARD,
    false,
  ),
  blog: true,
} as const
