import './discography.scss'

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'

export default function DiscographyPage() {
  const data = useStaticQuery<GatsbyTypes.DiscographyPageStaticQuery>(graphql`
    query DiscographyPageStatic {
      allStrapiAlbums {
        nodes {
          slug
          covers {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout className="Discography">
      <Meta title="밴드 이디어츠의 음원 발매 목록" />
      <Container>
        <Panel title="Discography">
          <div className="Discography__list">
            {data.allStrapiAlbums.nodes.map(({ slug, covers }) => (
              <Link to={`/album/${slug}/`} key={slug}>
                <div className="Discography__album">
                  <Img
                    className="Discography__albumImage"
                    fluid={covers?.[0]?.localFile?.childImageSharp?.fluid}
                  />
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </Container>
    </Layout>
  )
}
