import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import LiveList from '../components/LiveList'

import { edgesToLives } from '../utils/dataConverter' 

import './live.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "live"}}}) {
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
      <Layout>
        <Meta
          title="Idts의 공연 일정"
          path="live"
          description="Band Idiots의 공연 일정을 볼 수 있습니다."
        />
        <Container>
          <div className="live-wrapper">
            <LiveList lives={edgesToLives(data.allMarkdownRemark.edges)} />
          </div>
        </Container>
      </Layout>
    )}
  />
)
