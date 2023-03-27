type Speaker = {
  id: number,
  name: string
}

export type Talk = {
    id: number
    conferenceId: number
    trackId: number
    videoPlatform: string | null
    videoId: string
    title: string
    abstract: string
    speakers: Speaker[],
    dayId: number
    showOnTimetable: boolean
    startTime: string
    endTime: string
    talkDuration: number
    talkDifficulty: string
    talkCategory: string
    onAir: boolean
    documentUrl: string
    conferenceDayId: number
    conferenceDayDate: string
    startOffset?: number
    endOffset?: number
    actualStartTime?: string
    actualEndTime?: string
    presentationMethod: string | null
    slotNum?: number
}
