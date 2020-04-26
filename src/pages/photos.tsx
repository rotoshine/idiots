import './photos.scss'

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { useTrail, animated } from 'react-spring'

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
      photos: allStrapiPhotos {
        totalCount
        edges {
          node {
            id
            slug
            photo {
              localFile {
                childImageSharp {
                  fixed(width: 600, height: 400) {
                    ...GatsbyImageSharpFixed
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

  const trail = useTrail(getPhotosByPhotographer().length, {
    mass: 5,
    opacity: 1,
    y: 0,
    width: '100%',
    from: {
      opacity: 0,
      y: 190,
    },
  })
  return (
    <Layout className="Photos">
      <Meta title="밴드 이디어츠 사진" />
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
          {trail.map(({ y, width, ...rest }, index) => {
            const { node } = getPhotosByPhotographer()[index]
            return (
              <Link key={node.id} to={`/photos/${node.slug}`}>
                <animated.article
                  className="Photos__gallery"
                  style={{
                    ...rest,
                    transform: y.interpolate(y => `translate3d(${y}px,0,0)`),
                  }}
                >
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
                </animated.article>
              </Link>
            )
          })}
        </section>
      </Container>
    </Layout>
  )
}
