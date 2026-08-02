/* eslint-disable no-console */
// Adapted from kaigi.cloudnativedays.jp (scripts/update-data.ts).
// Fetches sponsors/talks/speakers/tracks from the Dreamkast API, downloads
// sponsor/speaker images to src/assets/dreamkast/, and writes snapshots to
// src/data/dreamkast/ for the build's read-only client (src/lib/dreamkast/client.ts).
// Notion-image and session-OGP steps from kaigi are intentionally dropped —
// out of scope for this data layer.
import fs from 'node:fs/promises'
import path from 'node:path'
import {
  fetchSponsorsFromApi,
  fetchTalksFromApi,
  fetchSpeakersFromApi,
  fetchTracksFromApi,
  downloadSponsorImages,
  downloadSpeakerImages,
} from '../src/lib/dreamkast/client'

const run = async () => {
  try {
    const dataDir = path.join(process.cwd(), 'src/data/dreamkast')
    await fs.mkdir(dataDir, { recursive: true })
    const etagPath = path.join(dataDir, 'image-etags.json')

    let etagMap: Record<string, string> = {}
    try {
      const etagContent = await fs.readFile(etagPath, 'utf-8')
      etagMap = JSON.parse(etagContent)
    } catch {
      console.log('No existing image-etags.json found, starting fresh.')
    }
    const updatedEtagMaps: Record<string, string>[] = []

    // Sponsors
    console.log('Updating sponsors...')
    const sponsorsRaw = await fetchSponsorsFromApi()
    const { sponsors, etagMap: sponsorUpdatedEtagMap } =
      await downloadSponsorImages(sponsorsRaw, etagMap)
    const sponsorDataPath = path.join(dataDir, 'sponsors.json')
    await fs.writeFile(sponsorDataPath, JSON.stringify(sponsors, null, 2))
    console.log(`Saved sponsors to ${sponsorDataPath}`)
    updatedEtagMaps.push(sponsorUpdatedEtagMap)

    // Talks
    console.log('Updating talks...')
    const talks = await fetchTalksFromApi()
    const talksDataPath = path.join(dataDir, 'talks.json')
    await fs.writeFile(talksDataPath, JSON.stringify(talks, null, 2))
    console.log(`Saved talks to ${talksDataPath}`)

    // Tracks
    console.log('Updating tracks...')
    const tracks = await fetchTracksFromApi()
    const tracksDataPath = path.join(dataDir, 'tracks.json')
    await fs.writeFile(tracksDataPath, JSON.stringify(tracks, null, 2))
    console.log(`Saved tracks to ${tracksDataPath}`)

    // Speakers — only download avatars for speakers with an accepted talk
    console.log('Updating speakers...')
    const speakersRaw = await fetchSpeakersFromApi()
    const acceptedSpeakerIds = new Set(
      talks.flatMap((talk) => talk.speakers.map((speaker) => speaker.id)),
    )
    const acceptedSpeakers = speakersRaw.filter((speaker) =>
      acceptedSpeakerIds.has(speaker.id),
    )

    const { speakers, etagMap: speakerUpdatedEtagMap } =
      await downloadSpeakerImages(acceptedSpeakers, etagMap)

    const speakerDataPath = path.join(dataDir, 'speakers.json')
    await fs.writeFile(speakerDataPath, JSON.stringify(speakers, null, 2))
    console.log(`Saved speakers to ${speakerDataPath}`)
    updatedEtagMaps.push(speakerUpdatedEtagMap)

    // ETags
    const updatedEtagMap = updatedEtagMaps.reduce(
      (acc, map) => ({ ...acc, ...map }),
      {},
    )
    const sortedEtagMap = Object.fromEntries(
      Object.entries(updatedEtagMap).sort((a, b) => a[0].localeCompare(b[0])),
    )
    await fs.writeFile(etagPath, JSON.stringify(sortedEtagMap, null, 2))
    console.log(`Saved image ETags to ${etagPath}`)
  } catch (error) {
    try {
      if (error instanceof Error) {
        console.error('Failed to update data:', error.message)
        console.error(error.stack)
      } else {
        console.error(
          'Failed to update data (unknown error type):',
          JSON.stringify(error),
        )
      }
    } catch (logError) {
      console.error(
        'Failed to update data, and failed to log the error:',
        logError,
      )
    }
    process.exit(1)
  }
}

run()
