import './index.scss'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import React, { useState, useEffect, useRef } from 'react'
import { animated, config, useTransition } from 'react-spring'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'

export default function IndexPage() {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)
  const { lives, homeContent } = useStaticQuery<GatsbyTypes.IndexPageStaticQuery>(graphql`
    query IndexPageStatic {
      lives: allStrapiLives(sort: { fields: [date], order: DESC }) {
        ...LiveList_lives
      }
      homeContent: strapiHomeContent(createdAt: { gt: "0" }) {
        schedulePosters {
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        carouselImages {
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const coverImages = homeContent?.carouselImages?.map(
    (carouselImage) => ({
      id: carouselImage?.localFile?.publicURL,
      url: carouselImage?.localFile?.publicURL,
      fluid: carouselImage?.localFile?.childImageSharp?.fluid,
    })
  )

  const transitions = useTransition(
    coverImages?.[coverImageIndex],
    item => item?.id || '',
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  )

  useEffect(() => {
    const MAX_INDEX = (coverImages?.length ?? 1) - 1
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
      <div className="cover-image-carousel">
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            className="cover-image"
            style={props}
          >
            <Img
              fluid={item?.fluid}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </animated.div>
        ))}
      </div>
      <Container>
        <div className="IndexPage__contents">
          <div className="IndexPage__panels">
            <Panel title="News">
              <ul className="IndexPage__newsList">
                <li>
                  <Img
                    fluid={homeContent?.schedulePosters?.[0]?.localFile?.childImageSharp?.fluid}
                    alt="이디어츠 2월 스케쥴"
                    loading="lazy"
                  />
                </li>
              </ul>
            </Panel>
            <LiveList title="Live" lives={lives} />
          </div>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </div>
      </Container>
    </Layout>
  )
}
