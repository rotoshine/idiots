import './LiveList.scss'

import React from 'react'
import { Link } from 'gatsby'
import { useTrail, animated } from 'react-spring'

import Panel from './Panel'

import { Live } from 'types/models'

interface Props {
  title?: string
  lives: Live[]
}
export default function LiveList({ title = 'Live List', lives }: Props) { 
  const trail = useTrail(lives.length, {
    mass: 5,
    tension: 2000,
    friction: 200,
    opacity: 1,
    x: 0,
    height: 80,
    from: {
      opacity: 0, x: 20, height: 0
    }
  })

  return (
    <Panel title={title}>
      <ul>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li key={lives[index]}
            className="live"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div>
              <Link to={lives[index].slug}>
                <div>
                  [{lives[index].date}] {lives[index].title}
                </div>
              </Link>
            </animated.div>
          </animated.li>
        ))}
      </ul>
    </Panel>
  )
}