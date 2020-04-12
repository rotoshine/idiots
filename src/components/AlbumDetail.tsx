import './AlbumDetail.scss'

import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import React from 'react'
import Layout from './Layout'
import Panel from './Panel'
import Container from './Container'
import Meta from './Meta'

type Context = {
  slug: string,
}

type Props = {
  data: GatsbyTypes.AlbumDetailQuery,
  context: Context,
}

export default function AlbumDetail({ data, context }: Props) {
  const album = data.strapiAlbums;
  if (!album) {
    throw new Error(`slug: ${context.slug}에 일치하는 앨범 정보가 없습니다.`);
  }

  const {
    releaseDate,
    songs = [],
    purchaseLink,
    title,
    slug,
    content = '',
    streamingLinks = '',
    covers,
  } = album

  const description = `${releaseDate} 발매. 수록곡: ${songs
    .map((song) => `${song!.name}. ${song!.name}`)
    .join(' ')} | 구입링크: ${purchaseLink}`

  return (
    <Layout className="AlbumDetail">
      <Meta
        title={`밴드 이디어츠의 앨범 - ${title}`}
        imageUrl={covers?.[0]?.localFile?.url}
        description={description}
        path={`/album/${slug}/`}
      />
      <Container>
        <Panel noBorder>
          <article className="AlbumDetail__content">
            <BackgroundImage
              Tag="section"
              className="AlbumDetail__poster"
              fluid={covers?.[0]?.localFile?.childImageSharp?.fluid}
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
                {releaseDate}
              </section>
              <section className="AlbumDetail__description">
                <h3>수록곡</h3>
                <ol>
                  {songs.map(song => (
                    <li key={song!.track}>
                      {song!.track}. {song!.name}
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
  query AlbumDetail($slug: String!) {
    strapiAlbums(slug: { eq: $slug }) {
      covers {
        localFile {
          url
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      slug
      title
      content
      releaseDate(formatString: "YYYY-MM-DD")
      purchaseLink
      streamingLinks
      songs {
        track
        name
      }
    }
  }
`
