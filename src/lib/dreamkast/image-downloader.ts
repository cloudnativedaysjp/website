// Ported nearly verbatim from kaigi.cloudnativedays.jp (src/lib/image-downloader.ts).
// Generic ETag-aware downloader, no zod/schema dependency.
import fs from 'node:fs/promises'
import path from 'node:path'

/**
 * Downloads an image from a URL and saves it to a local directory.
 * Used for building the static site with local assets.
 *
 * @param url Remote URL of the image
 * @param saveDir Directory to save the image to
 * @param baseFilename Filename without extension
 * @param previousEtag Optional ETag from previous download for 304 checks
 * @returns Object containing filename and new ETag, or null if 304 Not Modified
 * @throws Error if the download fails or the response is not OK
 */
export async function downloadImage(
  url: string,
  saveDir: string,
  baseFilename: string,
  previousEtag?: string,
): Promise<{ filename: string; etag: string | null } | null> {
  await fs.mkdir(saveDir, { recursive: true })

  const files = await fs.readdir(saveDir)
  const existingFile = files.find((f) => {
    const base = path.parse(f).name
    return base === baseFilename
  })

  const headers: HeadersInit = {}
  if (previousEtag && existingFile) {
    headers['If-None-Match'] = previousEtag
  }

  let response: Response
  try {
    response = await fetch(url, { headers })
  } catch (err) {
    if (existingFile) {
      return { filename: existingFile, etag: previousEtag ?? null }
    }
    throw err
  }

  if (response.status === 304 && existingFile && previousEtag) {
    return { filename: existingFile, etag: previousEtag }
  }

  if (!response.ok) {
    if (existingFile) {
      return { filename: existingFile, etag: previousEtag ?? null }
    }
    throw new Error(
      `Failed to fetch image: ${url} - ${response.status} ${response.statusText}`,
    )
  }

  let extension = path.extname(url).split('?')[0]
  if (!extension || extension === '') {
    const contentType = response.headers.get('content-type')
    if (contentType) {
      switch (contentType) {
        case 'image/jpeg':
          extension = '.jpg'
          break
        case 'image/png':
          extension = '.png'
          break
        case 'image/gif':
          extension = '.gif'
          break
        case 'image/svg+xml':
          extension = '.svg'
          break
        case 'image/webp':
          extension = '.webp'
          break
      }
    }
  }

  const arrayBuffer = await response.arrayBuffer()

  // Detect extension from magic bytes if Content-Type didn't help
  if (!extension) {
    const header = new Uint8Array(arrayBuffer.slice(0, 8))
    if (header[0] === 0x89 && header[1] === 0x50) extension = '.png'
    else if (header[0] === 0xff && header[1] === 0xd8) extension = '.jpg'
    else if (header[0] === 0x47 && header[1] === 0x49) extension = '.gif'
    else if (header[0] === 0x52 && header[1] === 0x49) extension = '.webp'
    else extension = '.bin'
  }

  const finalFilename = `${baseFilename}${extension}`
  const savePath = path.join(saveDir, finalFilename)

  await fs.writeFile(savePath, Buffer.from(arrayBuffer))

  const newEtag = response.headers.get('etag')

  return { filename: finalFilename, etag: newEtag }
}
