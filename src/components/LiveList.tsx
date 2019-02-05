import React from 'react'
import { Link } from 'gatsby'

import Panel from './Panel'

import { Live } from 'types/models'

interface Props {
  lives: Live[],
}
export default ({ lives }: Props) => (
  <Panel title="Live List">
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
