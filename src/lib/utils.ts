// NOTE: during Astro's static build, esbuild can constant-fold
// `import.meta.env.X || process.env.X` down to the raw (unquoted) value known
// at build time, which may surface as a boolean instead of a string. Coerce
// via String() defensively so `.trim()` never blows up on a non-string.
export const parseBooleanEnv = (
  raw: string | boolean | undefined,
  defaultValue: boolean,
): boolean => {
  if (raw === undefined || raw === '') return defaultValue
  return ['true', '1', 'yes', 'on'].includes(String(raw).trim().toLowerCase())
}

export const pathJoin = (path: string, subPath: string) => {
  return (
    '/' +
    path
      .split('/')
      .concat(subPath.split('/'))
      .filter((p) => p)
      .join('/')
  )
}
