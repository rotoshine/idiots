import './photos.scss'

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Meta from '../components/Meta'

export default function PhotosPage() {
  const [selectedPhotographer, setSelectedPhotographer] = useState<
    number | null
  >(null)
  const data = useStaticQuery<GatsbyTypes.PhotosPageStaticQuery>(graphql`
    query PhotosPageStatic {
      photographers: allStrapiPhotographer {
        edges {
          node {
            name
            instagramUrl
            profileImageUrl
          }
        }
      }
      photos: allStrapiPhotos(sort: { fields: live___date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            slug
            photo {
              localFile {
                childImageSharp {
                  fixed(width: 600, height: 400) {
                    width
                    height
                    src
                    srcSet
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }

            live {
              title
              date
            }
            photographer {
              name
            }
          }
        }
      }
    }
  `)
  const getPhotosByPhotographer = () => {
    if (selectedPhotographer === null) {
      return data.photos.edges
    }

    const photographer = data?.photographers.edges[selectedPhotographer]

    return data.photos.edges.filter(
      ({ node }) => node?.photographer?.name === photographer?.node?.name
    )
  }

  return (
    <Layout className="Photos">
      <Meta
        title="밴드 이디어츠의 사진들"
        description="밴드 이디어츠의 각종 사진을 볼 수 있습니다."
        path="/photos/"
      />
      <Container>
        <section className="Photos__photorgraphers">
          {data.photographers.edges.map(({ node }, i) => (
            <div
              className={classNames('Photos__photorgrapher', {
                Photos__selected: selectedPhotographer === i,
              })}
              key={node.name}
              onClick={() =>
                setSelectedPhotographer(selectedPhotographer === i ? null : i)
              }
            >
              <img
                src={node.profileImageUrl}
                alt={`photographer ${node.name} profile`}
              />
              <div className="Photos__name">{node.name}</div>
            </div>
          ))}
        </section>
        <section className="Photos__photos">
          {getPhotosByPhotographer().map(({ node }) => (
            <Link key={node.id} to={`/photos/${node.slug}`}>
              <article className="Photos__gallery">
                <Img
                  style={{ width: '100%', borderRadius: 5 }}
                  className="img"
                  fixed={node.photo[0]?.localFile.childImageSharp?.fixed}
                  objectFit="cover"
                  alt={`${node.live?.title} 공연 사진`}
                />
                <section className="Photos__description">
                  <h3>
                    {node.live.title} ({node.photo.length})
                  </h3>
                  <aside className="Photos__photo-by">
                    photo by{node.photographer.name}
                  </aside>
                </section>
              </article>
            </Link>
          ))}
        </section>
      </Container>
    </Layout>
  )
}
