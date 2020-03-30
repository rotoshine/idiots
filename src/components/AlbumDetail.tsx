import './AlbumDetail.scss'

import { graphql } from 'gatsby'
import React from 'react'
import Layout from './Layout'
import Panel from './Panel'
import Container from './Container'
import Meta from './Meta'

import { formatDateString } from '../utils/date'
import { createImagePath } from '../utils/image'

import { Album } from 'types/models'

export default function AlbumDetail({ data }: { data: any }) {
  const album = data.strapiAlbums as Album
  const {
    releaseDate,
    songs,
    purchaseLink,
    title,
    slug,
    content,
    streamingLinks,
    covers,
  } = album

  const description = `${formatDateString(
    releaseDate
  )} 발매. 수록곡: ${songs
    .map(({ track, name }) => `${track}. ${name}`)
    .join(' ')} | 구입링크: ${purchaseLink}`

  return (
    <Layout className="AlbumDetail">
      <Meta
        title={`밴드 이디어츠의 앨범 - ${title}`}
        imageUrl={createImagePath(covers[0].url)}
        description={description}
        path={slug}
      />
      <Container>
        <Panel noBorder>
          <article className="AlbumDetail__content">
            <section
              className="AlbumDetail__poster"
              style={{
                backgroundImage: `url('${createImagePath(covers[0].url)}')`,
              }}
            />
            <section className="AlbumDetail__descriptions">
              <section className="AlbumDetail__description">
                <h1>{title}</h1>
              </section>
              <section
                className="AlbumDetail__description"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <section className="AlbumDetail__description">
                <h3>발매일</h3>
                {formatDateString(releaseDate)}
              </section>
              <section className="AlbumDetail__description">
                <h3>수록곡</h3>
                <ol>
                  {songs.map(({ track, name }) => (
                    <li key={track}>
                      {track}. {name}
                    </li>
                  ))}
                </ol>
              </section>
              <section>
                <h3>스트리밍 링크</h3>
                <div dangerouslySetInnerHTML={{ __html: streamingLinks }}></div>
              </section>
              <section>
                <h3>구입링크</h3>
                <ul>
                  <li>
                    <a href={purchaseLink} target="_blank">
                      구입신청서
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </article>
        </Panel>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiAlbums(slug: { eq: $slug }) {
      covers {
        url
      }
      slug
      title
      content
      releaseDate
      purchaseLink
      streamingLinks
      songs {
        track
        name
      }
    }
  }
`
