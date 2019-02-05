import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import LiveList from '../components/LiveList'

import { Live } from '../types/models'

import './live.scss'

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
        <Container>
          <div className="live-wrapper">
            <LiveList lives={edgesToLives(data.allMarkdownRemark.edges)} />
          </div>
        </Container>
      </Layout>
    )}
  />
)
