import { Conference } from './types'
import axios from 'axios'

class DreamkastApi {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  async List(): Promise<Conference[]> {
    const res = await axios.get<Conference[]>(this.apiUrl + '/v1/events')
    return res.data
  }
}

const DREAMKAST_API =
  process.env.DREAMKAST_API !== undefined
    ? process.env.DREAMKAST_API
    : 'https://event.cloudnativedays.jp/api'

export const dkClient = new DreamkastApi(DREAMKAST_API)
