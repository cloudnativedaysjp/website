import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://event.cloudnativedays.jp/' }),
  endpoints: () => ({}),
})
