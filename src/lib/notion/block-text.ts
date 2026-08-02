import type { Block, RichText } from '../interfaces'

const richTextToPlainText = (richTexts?: RichText[]): string => {
  if (!richTexts || richTexts.length === 0) return ''
  return richTexts.map((richText) => richText.PlainText || '').join('')
}

// Walks the Notion block tree (as built by src/lib/notion/client.ts) and
// concatenates the plain text content of blocks that carry meaningful
// prose, for use as a search-index document body.
export const extractPlainText = (blocks: Block[]): string => {
  const lines: string[] = []

  const visit = (block: Block) => {
    switch (block.Type) {
      case 'paragraph':
        if (block.Paragraph) {
          lines.push(richTextToPlainText(block.Paragraph.RichTexts))
          block.Paragraph.Children?.forEach(visit)
        }
        break
      case 'heading_1':
        if (block.Heading1) {
          lines.push(richTextToPlainText(block.Heading1.RichTexts))
          block.Heading1.Children?.forEach(visit)
        }
        break
      case 'heading_2':
        if (block.Heading2) {
          lines.push(richTextToPlainText(block.Heading2.RichTexts))
          block.Heading2.Children?.forEach(visit)
        }
        break
      case 'heading_3':
        if (block.Heading3) {
          lines.push(richTextToPlainText(block.Heading3.RichTexts))
          block.Heading3.Children?.forEach(visit)
        }
        break
      case 'bulleted_list_item':
        if (block.BulletedListItem) {
          lines.push(richTextToPlainText(block.BulletedListItem.RichTexts))
          block.BulletedListItem.Children?.forEach(visit)
        }
        break
      case 'numbered_list_item':
        if (block.NumberedListItem) {
          lines.push(richTextToPlainText(block.NumberedListItem.RichTexts))
          block.NumberedListItem.Children?.forEach(visit)
        }
        break
      case 'to_do':
        if (block.ToDo) {
          lines.push(richTextToPlainText(block.ToDo.RichTexts))
          block.ToDo.Children?.forEach(visit)
        }
        break
      case 'quote':
        if (block.Quote) {
          lines.push(richTextToPlainText(block.Quote.RichTexts))
          block.Quote.Children?.forEach(visit)
        }
        break
      case 'callout':
        if (block.Callout) {
          lines.push(richTextToPlainText(block.Callout.RichTexts))
          block.Callout.Children?.forEach(visit)
        }
        break
      case 'toggle':
        if (block.Toggle) {
          lines.push(richTextToPlainText(block.Toggle.RichTexts))
          block.Toggle.Children?.forEach(visit)
        }
        break
      default:
        break
    }
  }

  blocks.forEach(visit)

  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
}
