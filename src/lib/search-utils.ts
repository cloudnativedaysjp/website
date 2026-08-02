export const CJK_RE = /[぀-ヿ㐀-鿿]/
export const WORD_RE = /[a-z0-9]+/gi
export const PUNCT_RE = /[^\p{L}\p{N}぀-ヿ㐀-鿿]+/gu

export function stripMarkdown(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, ' $1 ')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, ' $1 ')
    .replace(/^#{1,6}\s+/gm, ' ')
    .replace(/^>\s+/gm, ' ')
    .replace(/^\s*[-*+]\s+/gm, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/[*_~#|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function tokenizeCjkSegment(segment: string): string[] {
  if (segment.length <= 1) return [segment]
  const tokens: string[] = []
  for (let i = 0; i < segment.length - 1; i += 1) {
    tokens.push(segment.slice(i, i + 2))
  }
  return tokens
}

export function tokenize(text: string): string[] {
  const normalized = stripMarkdown(text.normalize('NFKC').toLowerCase())
  if (!normalized) return []

  const tokens: string[] = []
  const parts = normalized.split(PUNCT_RE).filter(Boolean)

  for (const part of parts) {
    if (!part) continue

    // Extract English words
    const words = part.match(WORD_RE)
    if (words) tokens.push(...words)

    // Extract CJK bigrams
    let currentCjk = ''
    for (const char of part) {
      if (CJK_RE.test(char)) {
        currentCjk += char
      } else {
        if (currentCjk) {
          tokens.push(...tokenizeCjkSegment(currentCjk))
          currentCjk = ''
        }
      }
    }
    if (currentCjk) {
      tokens.push(...tokenizeCjkSegment(currentCjk))
    }
  }

  return tokens
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export interface BlogSearchDocument {
  slug: string
  title: string
  description: string
  content: string
  pubDate: string
}
