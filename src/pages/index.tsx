import { graphql, StaticQuery, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'

import { Live } from '../types/models'

import './index.scss'

interface LiveListEdge {
  node: {
    id: string
    frontmatter: Live
    fields: {
      slug: string
    }
  }
}

const edgesToLives = (edges: LiveListEdge[]) => (
  edges.map((edge: LiveListEdge) => (
    {
      id: edge.node.id,
      date: edge.node.frontmatter.date,
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
    }
  ))
) 

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
        <img className="cover-image" src="/images/main.jpeg" width="100%" />
        <Container>
          <div className="panels">
            <Panel title="News">
              <ul className="newsList">
                <li>이디어츠 홈페이지가 개설되었습니다.</li>
              </ul>
            </Panel>
            <LiveList lives={edgesToLives(data.allMarkdownRemark.edges)} />
          </div>
        </Container>
      </Layout>
    )}
  />
)