import './PhotoDetail.scss'
import 'react-image-lightbox/style.css'

import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox'

import Layout from './Layout'
import Meta from './Meta'
import Container from './Container'
import PhotosPage from '../pages/photos'

interface Props {
  data: GatsbyTypes.PhotoDetailQuery
  context: {
    slug: string
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
export default function PhotoDetail({ data }: Props) {
  const {
    photo,
    live,
    photographer,
    slug,
  } = data.strapiPhotos as GatsbyTypes.StrapiPhotos
  const [selectedPhotoIndex, setSelectPhotoIndex] = useState<number | null>(
    null
  )

  return (
    <Layout className="PhotoDetail">
      {photo && photo.length > 0 && (
        <>
          <Meta
            title={`밴드 이디어츠 - ${live?.title} 사진`}
            description={`${live?.title} 공연의 총 ${photo?.length} 장의 공연 사진. photo by ${photographer?.name}`}
            imageUrl={photo[0]!.localFile?.publicURL}
            path={`/photos/${slug}`}
          />
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
                  onClick={() => setSelectPhotoIndex(i)}
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
              onCloseRequest={() => setSelectPhotoIndex(null)}
              onMovePrevRequest={() => {
                setSelectPhotoIndex(
                  getPrevIndex(selectedPhotoIndex, photo.length)
                )
              }}
              onMoveNextRequest={() => {
                setSelectPhotoIndex(
                  getNextIndex(selectedPhotoIndex, photo.length)
                )
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
