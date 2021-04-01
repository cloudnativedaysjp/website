import * as React from 'react'

import { Talk } from '../interfaces'

type ListDetailProps = {
  item: Talk
}

const ListDetail = ({ item: talk }: ListDetailProps) => (
  <div>
    <h1>Detail for {talk.title}</h1>
    <p>ID: {talk.id}</p>
    <p>Event: {talk.abbr}</p>
  </div>
)

export default ListDetail
