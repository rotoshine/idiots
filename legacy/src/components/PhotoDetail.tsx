import './PhotoDetail.scss'
import 'react-image-lightbox/style.css'

import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox'

import Layout from './Layout'
import Meta from './Meta'
import Container from './Container'
import { findIndex, find } from 'lodash'

interface Props {
  data: GatsbyTypes.PhotoDetailQuery
  pageContext: {
    slug: string
    photoId?: string
  }
}

const breakPointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const getPrevIndex = (currentIndex: number, maxSize: number) => {
  if (currentIndex === 0) {
    return maxSize - 1
  }
  return currentIndex - 1
}

const getNextIndex = (currentIndex: number, maxSize: number) => {
  if (currentIndex + 1 === maxSize) {
    return 0
  }
  return currentIndex + 1
}

const updateUrl = (nextUrl: string) => {
  history.replaceState(null, '', nextUrl)
}

export default function PhotoDetail({ pageContext, data }: Props) {
  const {
    photo,
    live,
    photographer,
    slug,
  } = data.strapiPhotos as GatsbyTypes.StrapiPhotos

  const [selectedPhotoIndex, setSelectPhotoIndex] = useState<number | null>(
    null
  )

  useEffect(() => {
    if (pageContext.photoId) {
      const index = findIndex(data.strapiPhotos.photo, p => {
        return p.id === pageContext.photoId
      })

      if (index > -1) {
        setSelectPhotoIndex(index)
      }
    }
  }, [])

  const renderMeta = () => {
    if (pageContext.photoId) {
      const photoItem = find(photo, p => p.id === pageContext.photoId)
      const index = findIndex(photo, p => p.id === pageContext.photoId)

      if (photoItem && index > -1) {
        return (
          <Meta
            title={`밴드 이디어츠 - ${live?.title} 사진 (${index + 1}/${
              photo.length
            })`}
            description={`공연명 ${live?.title} | 공연일 ${live.date} | photo by ${photographer?.name}`}
            imageUrl={photoItem.localFile?.publicURL}
            path={`/photos/${slug}/${pageContext.photoId}/`}
          />
        )
      }
    }
    return (
      <Meta
        title={`밴드 이디어츠 - ${live?.title} 사진 (1/${photo.length})`}
        description={`공연명 ${live?.title} | 공연일 ${live.date} | photo by ${photographer?.name}`}
        imageUrl={photo[0]!.localFile?.publicURL}
        path={`/photos/${slug}`}
      />
    )
  }

  return (
    <Layout className="PhotoDetail">
      {photo && photo.length > 0 && (
        <>
          {renderMeta()}
          <Container>
            <section className="PhotoDetail__description">
              <div>
                <Link to={`/live/${live?.slug}`}>
                  <h2>{live?.title}</h2>
                </Link>
              </div>
              <div className="PhotoDetail__instaLink">
                <a href={photographer?.instagramUrl} target="_blank">
                  photo by {photographer?.name}{' '}
                  <i className="icon ion-logo-instagram" />
                </a>
              </div>
            </section>
            <Masonry
              className="PhotoDetail__photos-grid"
              columnClassName="PhotoDetail__grid-column"
              breakpointCols={breakPointColumns}
            >
              {photo?.map((photo: any, i: number) => (
                <article
                  key={`${photo.url}-${i}`}
                  onClick={() => {
                    setSelectPhotoIndex(i)
                    updateUrl(`/photos/${pageContext.slug}/${photo.id}/`)
                  }}
                >
                  <Img
                    fluid={photo?.localFile?.childImageSharp?.fluid}
                    alt={`이디어츠 ${live?.title} 공연 사진`}
                  />
                </article>
              ))}
            </Masonry>
            <div className="PhotoDetail__footer">
              <Link to="/photos">Move to List</Link>
            </div>
          </Container>
          {selectedPhotoIndex !== null && (
            <Lightbox
              mainSrc={photo[selectedPhotoIndex]?.localFile?.publicURL!}
              prevSrc={
                photo[getPrevIndex(selectedPhotoIndex, photo.length)]!
                  .localFile!.publicURL!
              }
              nextSrc={
                photo[getNextIndex(selectedPhotoIndex, photo.length)]!
                  .localFile!.publicURL!
              }
              onCloseRequest={() => {
                setSelectPhotoIndex(null)
                updateUrl(`/photos/${pageContext.slug}/`)
              }}
              onMovePrevRequest={() => {
                const prevIndex = getPrevIndex(selectedPhotoIndex, photo.length)
                setSelectPhotoIndex(prevIndex)
                updateUrl(`/photos/${pageContext.slug}/${photo[prevIndex].id}/`)
              }}
              onMoveNextRequest={() => {
                const nextIndex = getNextIndex(selectedPhotoIndex, photo.length)
                setSelectPhotoIndex(nextIndex)
                updateUrl(`/photos/${pageContext.slug}/${photo[nextIndex].id}/`)
              }}
            />
          )}
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PhotoDetail($slug: String!) {
    strapiPhotos(slug: { eq: $slug }) {
      slug
      live {
        slug
        date
        title
      }
      photographer {
        name
        instagramUrl
      }
      photo {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
