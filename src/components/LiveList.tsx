import './LiveList.scss'

import React from 'react'
import { Link, graphql } from 'gatsby'
import { useTrail, animated } from 'react-spring'

import Panel from './Panel'
import classNames from 'classnames'

interface Props {
  title?: string
  lives: GatsbyTypes.LiveList_livesFragment
}
export default function LiveList({ title = 'Live List', lives }: Props) {
  const trail = useTrail(lives.edges.length, {
    mass: 5,
    tension: 2000,
    friction: 200,
    opacity: 1,
    x: 0,
    height: 80,
    from: {
      opacity: 0,
      x: 20,
      height: 0,
    },
  })

  return (
    <Panel title={title}>
      <section className="LiveList">
        <ul>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.li
              key={index}
              className="LiveList__live"
              style={{
                ...rest,
                transform: x.to(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div>
                <Link
                  className={classNames({
                    LiveList__canceledLive: lives.edges[index].node.isCanceled,
                  })}
                  to={`/live/${lives.edges[index].node.slug}/`}
                >
                  <div>
                    {lives.edges[index].node.isCanceled ? '[취소됨]' : ''}[
                    {lives.edges[index].node.date}]{' '}
                    {lives.edges[index].node.title}
                  </div>
                </Link>
              </animated.div>
            </animated.li>
          ))}
        </ul>
      </section>
    </Panel>
  )
}

export const fragments = graphql`
  fragment LiveList_lives on StrapiLivesConnection {
    edges {
      node {
        id
        date(formatString: "YYYY-MM-DD")
        title
        slug
        isCanceled
      }
    }
  }
`
