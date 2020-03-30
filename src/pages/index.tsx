import './index.scss'

import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { animated, config, useTransition } from 'react-spring'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'
import Meta from '../components/Meta'

import { edgesToLivesForStrapi } from '../utils/dataConverter'
import { createImagePath } from '../utils/image'

export default function IndexPage() {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)
  const { lives, homeContent } = useStaticQuery(graphql`
    query {
      lives: allStrapiLives(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            id
            date
            title
            slug
          }
        }
      }
      homeContent: allStrapiHomeContent {
        edges {
          node {
            schedulePosters {
              url
            }
            carouselImages {
              url
            }
          }
        }
      }
    }
  `)

  const coverImages = homeContent.edges[0].node.carouselImages.map(
    (carouselImage: any, index: i) => ({
      id: index,
      url: createImagePath(carouselImage.url),
    })
  )

  const transitions = useTransition(
    coverImages[coverImageIndex],
    item => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  )

  useEffect(() => {
    const MAX_INDEX = coverImages.length - 1
    const timeout = setInterval(() => {
      if (indexRef?.current === MAX_INDEX) {
        indexRef.current = 0
      } else {
        indexRef.current = indexRef.current + 1
      }
      setCoverImageIndex(indexRef.current)
    }, 5000)

    return () => {
      if (timeout) {
        clearInterval(timeout)
      }
    }
  }, [])

  return (
    <Layout className="IndexPage">
      <Meta>
        {coverImages.map(coverImage => (
          <link
            key={coverImage.id}
            rel="preload"
            href={coverImage.url}
            as="image"
          />
        ))}
      </Meta>
      <div className="cover-image-carousel">
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            className="cover-image"
            style={{
              ...props,
              backgroundImage: `url('${item.url}`,
            }}
          />
        ))}
      </div>
      <Container>
        <div className="IndexPage__contents">
          <div className="IndexPage__panels">
            <Panel title="News">
              <ul className="IndexPage__newsList">
                <li>
                  <img
                    width="100%"
                    src={createImagePath(
                      homeContent.edges[0].node.schedulePosters[0].url
                    )}
                    alt="이디어츠 2월 스케쥴"
                  />
                </li>
              </ul>
            </Panel>
            <LiveList title="Live" lives={edgesToLivesForStrapi(lives.edges)} />
          </div>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </div>
      </Container>
    </Layout>
  )
}
