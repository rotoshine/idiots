import './discography.scss'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import { createImagePath } from '../utils/image'

export default function DiscographyPage() {
  const data = useStaticQuery(graphql`
    {
      allStrapiAlbums {
        edges {
          node {
            slug
            covers {
              url
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
            {data.allStrapiAlbums.edges.map(({ node }: any) => (
              <Link to={`/album/${node.slug}/`} key={node.slug}>
                <div className="Discography__album">
                  <div
                    className="Discography__albumImage"
                    style={{
                      backgroundImage: `url('${createImagePath(
                        node.covers[0].url
                      )}')`,
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
