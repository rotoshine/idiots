import styles from './LiveList.module.scss'

import React from 'react'
import Link from 'next/link'
import { useTrail, animated } from 'react-spring'

import Panel from './Panel'
import classNames from 'classnames'

interface Props {
  title?: string
  lives: any
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
      opacity: 0,
      x: 20,
      height: 0,
    },
  })

  return (
    <Panel title={title}>
      <section className={styles.LiveList}>
        <ul>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.li
              key={index}
              className={styles.LiveList__live}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div>
                <Link href={`/live/${lives[index].slug}/`}>
                  <div
                    className={classNames({
                      [styles['LiveList__canceledLive']]:
                        lives[index].isCanceled,
                    })}
                  >
                    {lives[index].isCanceled ? '[취소됨]' : ''}[
                    {lives[index].date}] {lives[index].title}
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
