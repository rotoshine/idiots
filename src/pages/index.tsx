import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'

import { edgesToLives } from '../utils/dataConverter'

import './index.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: {frontmatter: { type: {eq: "live"} }},
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
    `}
    render={data => (
      <Layout className="IndexPage">
        <img className="cover-image" src="/images/main.jpeg" width="100%" />
        <Container>
          <div className="IndexPage__contents">
            <div className="IndexPage__panels">
              <Panel title="News">
                <ul className="IndexPage__newsList">
                  <li>이디어츠 홈페이지가 개설되었습니다.</li>
                </ul>
              </Panel>
              <LiveList title="Lives" lives={edgesToLives(data.allMarkdownRemark.edges)} />
            </div>
            <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
          </div>
        </Container>
      </Layout>
    )}
  />
)