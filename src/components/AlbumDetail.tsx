import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import Layout from './Layout';
import Meta from './Meta';

export default ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter, fields } = markdownRemark
  const { title, imageUrl, releaseYear, songs } = frontmatter

  const description = `${releaseYear}년 발매. ${songs.map((song: string, i: number) => `${i + 1}. ${song}`).join(' ')}`
  return (
    <Layout className="AlbumDetail">
      <Meta 
        title={`Band Iditos - ${title}`}
        imageUrl={imageUrl}
        description={description}
      />
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