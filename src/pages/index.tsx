import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { animated, config, useTransition } from 'react-spring'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'

import { edgesToLives } from '../utils/dataConverter'

import './index.scss'

const coverImages = [
  { id: 0, url: '/images/main.jpg' },
  { id: 1, url: '/images/main1.jpg' },
  { id: 2, url: '/images/main2.jpg' },
]

export default function IndexPage() {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "live" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

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
      console.log('cleanr')
      if (timeout) {
        clearInterval(timeout)
      }
    }
  }, [])

  return (
    <Layout className="IndexPage">
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
                    src="/images/posters/2020-02/202002-schedule.jpeg"
                    alt="이디어츠 2월 스케쥴"
                  />
                </li>
              </ul>
            </Panel>
            <LiveList
              title="Live"
              lives={edgesToLives(data.allMarkdownRemark.edges)}
            />
          </div>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </div>
      </Container>
    </Layout>
  )
}
