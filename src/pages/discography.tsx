import './discography.scss'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'

export default function DiscographyPage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "album" } } }) {
        edges {
          node {
            id
            frontmatter {
              imageUrl
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout className="Discography">
      <Meta title="이디어츠 음원 발매 목록" />
      <Container>
        <Panel title="Discography">
          <div className="Discography__list">
            {data.allMarkdownRemark.edges.map(({ node }: any) => (
              <Link to={node.fields.slug} key={node.id}>
                <div className="Discography__album">
                  <div
                    className="Discography__albumImage"
                    style={{
                      backgroundImage: `url('${node.frontmatter.imageUrl}')`,
                    }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </Container>
    </Layout>
  )
}
