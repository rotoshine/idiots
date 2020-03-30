import React from 'react'
import { Band } from 'types/models'
import { isEmpty } from 'lodash'

interface Props {
  bands: Band[]
}

export default function Bands({ bands }: Props) {
  return (
    <ul>
      {bands.map(({ name, instagramUrl }) => (
        <li key={name} className="LiveDetail__team">
          {!isEmpty(instagramUrl) ? (
            <a href={instagramUrl!} target="_blank">
              {name}
            </a>
          ) : (
            name
          )}
        </li>
      ))}
    </ul>
  )
}
