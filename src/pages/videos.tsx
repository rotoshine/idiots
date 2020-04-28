import './videos.scss'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Meta from '../components/Meta'

export default function VidoesPage() {
  const data = useStaticQuery<GatsbyTypes.VideosPageStaticQuery>(graphql`
    query VideosPageStatic {
      videos: allStrapiVideos {
        totalCount
        edges {
          node {
            id
            title
            videoUrl
            videoType
            live {
              title
            }
          }
        }
      }
    }
  `)

  const { edges: videos } = data.videos

  return (
    <Layout className="Videos">
      <Meta
        title="밴드 이디어츠의 영상들"
        description="밴드 이디어츠의 각종 영상을 볼 수 있습니다."
        path="/videos/"
      />
      <Container>
        <section className="Videos__channelInfo">
          <a
            href="https://www.youtube.com/channel/UCZy_fokfY0jQ4GREf6eUXjg"
            target="_blank"
          >
            Channel Link
          </a>
        </section>
        <section className="Videos__grid">
          {videos.map(({ node }) => (
            <article key={node.id} className="Videos__item">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${node.videoUrl}`}
                frameBorder="0"
              ></iframe>
            </article>
          ))}
        </section>
      </Container>
    </Layout>
  )
}
