import './LiveList.scss'

import React from 'react'
import { Link } from 'gatsby'

import Panel from './Panel'

import { Live } from 'types/models'

interface Props {
  title?: string
  lives: Live[]
}
export default ({ title = 'Live List', lives }: Props) => (
  <Panel title={title}>
    <ul>
      {lives.map((live: Live) => (
        <li key={live.id} className="live">
          <Link to={live.slug}>
            <div>
              [{live.date}] {live.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Panel>
)
