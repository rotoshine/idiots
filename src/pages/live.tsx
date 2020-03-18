import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import LiveList from '../components/LiveList'

import { edgesToLives } from '../utils/dataConverter'

import './live.scss'

export default function LivePage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "live" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Meta
        title="이디어츠 공연 일정"
        path="live"
        description="멍청이 펑크락밴드 이디어츠의 공연 일정입니다."
        imageUrl="https://idiots.band/images/main1.jpg"
        imageWidth={1093}
        imageHeight={730}
      />
      <Container>
        <div className="live-wrapper">
          <LiveList lives={edgesToLives(data.allMarkdownRemark.edges)} />
        </div>
      </Container>
    </Layout>
  )
}
