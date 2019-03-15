import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import Layout from './Layout';
import Panel from './Panel';
import Container from './Container'
import Meta from './Meta';

import './AlbumDetail.scss'

export default ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, imageUrl, releaseYear, songs } = frontmatter

  const description = `${releaseYear}년 발매. 수록곡: ${songs.map((song: string, i: number) => `${i + 1}. ${song}`).join(' ')}`
  return (
    <Layout className="AlbumDetail">
      <Meta
        title={`이디어츠(Idiots)의 앨범 - ${title}`}
        imageUrl={imageUrl}
        description={description}
      />
      <Container>
        <Panel noBorder>
          <div className="AlbumDetail__content">
            <div className="AlbumDetail__poster" style={{backgroundImage: `url('${imageUrl}')`}} />
            <div className="AlbumDetail__descriptions">
              <div className="AlbumDetail__description">
                <h1>{title}</h1>
              </div>
              <div className="AlbumDetail__description">
                <h3>발매년도</h3>
                {releaseYear}
              </div>
              <div className="AlbumDetail__description">
                <h3>수록곡</h3>
                <ol>
                  {songs.map((song: string, index: number) => (
                    <li key={song}>
                      {index+1}. {song}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="AlbumDetail__description" dangerouslySetInnerHTML={{__html: html}} />
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
      }
      fields {
        slug
      }
    }
  }
`