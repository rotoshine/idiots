import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel';

import './discography.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "album"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                imageUrl
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout className="Discography">
        <Meta
          title="Band Idiots의 음반 발매 목록"
        />
        <Container>
          <Panel title="Discography">
            <div className="Discography__list">
              {data.allMarkdownRemark.edges.map(({ node } : any) => (
                <div className="Discography__album" key={node.id}>
                  <div className="Discography__albumImage" style={{ backgroundImage: `url('${node.frontmatter.imageUrl}')` }}>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Container>
      </Layout>
    )}
  />
)
