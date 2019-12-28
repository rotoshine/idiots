import './AlbumDetail.scss'

import { graphql } from 'gatsby'
import React from 'react'
import Layout from './Layout'
import Panel from './Panel'
import Container from './Container'
import Meta from './Meta'

import { StreamingLink } from 'types/models'

export default function AlbumDetail({ data }: { data: any }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark
  const {
    title,
    imageUrl,
    releaseYear,
    songs,
    streamingLinks,
    purchageLink,
  } = frontmatter

  const description = `${releaseYear}년 발매. 수록곡: ${songs
    .map((song: string, i: number) => `${i + 1}. ${song}`)
    .join(' ')} | 구입링크: ${purchageLink}`

  return (
    <Layout className="AlbumDetail">
      <Meta
        title={`밴드 이디어츠의 앨범 - ${title}`}
        imageUrl={imageUrl}
        description={description}
        path={fields.slug}
      />
      <Container>
        <Panel noBorder>
          <div className="AlbumDetail__content">
            <div
              className="AlbumDetail__poster"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            <div className="AlbumDetail__descriptions">
              <div className="AlbumDetail__description">
                <h1>{title}</h1>
              </div>
              <div className="AlbumDetail__description">
                <h3>발매년도</h3>
                {releaseYear}
              </div>
              <div
                className="AlbumDetail__description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="AlbumDetail__description">
                <h3>수록곡</h3>
                <ol>
                  {songs.map((song: string, index: number) => (
                    <li key={song}>
                      {index + 1}. {song}
                    </li>
                  ))}
                </ol>
              </div>
              <p>
                <h3>스트리밍 링크</h3>
                <ul>
                  {streamingLinks.map(
                    (streamingLink: StreamingLink, i: number) => (
                      <li key={`streaming-lini-${i}`}>
                        <a href={streamingLink.link} target="_blank">
                          {streamingLink.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </p>
              <p>
                <h3>구입링크</h3>
                <ul>
                  <li>
                    <a href={purchageLink} target="_blank">
                      구입신청서
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Panel>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        imageUrl
        releaseYear
        songs
        purchageLink
        streamingLinks {
          name
          link
        }
      }
      fields {
        slug
      }
    }
  }
`
