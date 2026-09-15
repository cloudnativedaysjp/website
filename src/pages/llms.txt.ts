import type { APIRoute } from 'astro'
import { Conferences } from '../data/data'
import { FEATURES } from '../features'
import { PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION } from '../server-constants'

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (path: string) => new URL(path, site).toString()

  const upcomingOrLatest = [...Conferences].reverse()[0]

  const eventLines = [...Conferences].reverse().map((conf) => {
    const details = [conf.venue, conf.location, conf.format]
      .filter(Boolean)
      .join(' / ')
    return `- [${conf.name}](${siteUrl(`/${conf.abbr}`)}): ${conf.theme}${details ? `（${details}）` : ''}`
  })

  const optionalSections: string[] = []
  if (FEATURES.timetable) {
    optionalSections.push(`- [タイムテーブル](${siteUrl('/timetable')})`)
  }
  if (FEATURES.sessions) {
    optionalSections.push(`- [セッション一覧](${siteUrl('/sessions')})`)
  }
  if (FEATURES.jobboard) {
    optionalSections.push(`- [Job Board](${siteUrl('/jobboard')})`)
  }

  const lines = [
    `# ${PUBLIC_SITE_TITLE}`,
    '',
    `> ${PUBLIC_SITE_DESCRIPTION}`,
    '',
    'CloudNative Days はコミュニティ・企業・技術者が一堂に会し、クラウドネイティブムーブメントを牽引することを目的としたテックカンファレンスシリーズです。国内各地で年に複数回開催されています。',
    '',
    '## 直近のイベント',
    '',
    `- [${upcomingOrLatest.name}](${siteUrl(`/${upcomingOrLatest.abbr}`)}): ${upcomingOrLatest.theme}`,
    '',
    '## 主要ページ',
    '',
    `- [トップページ](${siteUrl('/')})`,
    `- [開催履歴](${siteUrl('/history')})`,
    `- [ブログ](${siteUrl('/posts')})`,
    `- [行動規範 (Code of Conduct)](${siteUrl('/CoC')})`,
    `- [プライバシーポリシー](${siteUrl('/privacy')})`,
    ...optionalSections,
    '',
    '## 開催イベント一覧',
    '',
    ...eventLines,
    '',
    '## 補足',
    '',
    `- サイトマップ: ${siteUrl('/sitemap-index.xml')}`,
    '- 各イベントの詳細（会場、日程、Code of Conduct、プライバシーポリシー等）は個別のイベントページを参照してください。',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
