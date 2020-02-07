import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useSpring, animated } from 'react-spring'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'

import { edgesToLives } from '../utils/dataConverter'

import './index.scss'

export default function IndexPage() {
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
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Layout className="IndexPage">
      <animated.div style={props}>
        <img className="cover-image" src="/images/main.jpeg" width="100%" />
      </animated.div>
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
              title="Lives"
              lives={edgesToLives(data.allMarkdownRemark.edges)}
            />
          </div>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </div>
      </Container>
    </Layout>
  )
}
