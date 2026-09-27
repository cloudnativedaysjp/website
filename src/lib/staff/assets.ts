import type { ImageMetadata } from 'astro'

const staffImageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../../data/staff/icons/*',
  { eager: true },
)

const staffImageMap = new Map<string, ImageMetadata>()

for (const [imagePath, imageModule] of Object.entries(staffImageModules)) {
  const filename = imagePath.split('/').pop()
  if (filename) staffImageMap.set(filename, imageModule.default)
}

export const getStaffImage = (
  filename: string,
): ImageMetadata | undefined => staffImageMap.get(filename)
