import './live.scss'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Container from '../components/Container'
import LiveList from '../components/LiveList'

export default function LivePage() {
  const data = useStaticQuery<GatsbyTypes.LivePageStaticQuery>(graphql`
    query LivePageStatic {
      allStrapiLives(sort: { fields: [date], order: DESC }) {
        ...LiveList_lives
      }
    }
  `)

  return (
    <Layout className="Live">
      <Meta
        title="이디어츠 공연 일정"
        path="live"
        description="멍청이 펑크락밴드 이디어츠의 공연 일정입니다."
        imageUrl="https://admin.idiots.band/uploads/e6a779d081764f618a65dcda766d0aab.jpg"
        imageWidth={1093}
        imageHeight={730}
      />
      <Container>
        <section className="live-wrapper">
          <LiveList lives={data.allStrapiLives} />
        </section>
      </Container>
    </Layout>
  )
}
