import './index.scss'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState, useEffect, useRef } from 'react'
import { animated, config, useTransition } from 'react-spring'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'
import TwitterTimeline from '../components/TwitterTimeline'
import Meta from '../components/Meta'

export default function IndexPage() {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)
  const { lives, homeContent } = useStaticQuery<
    GatsbyTypes.IndexPageStaticQuery
  >(graphql`
    query IndexPageStatic {
      lives: allStrapiLives(sort: { fields: [date], order: DESC }, limit: 32) {
        ...LiveList_lives
      }
      homeContent: strapiHomeContent(createdAt: { gt: "0" }) {
        schedulePosters {
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        carouselImages {
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const coverImages = homeContent?.carouselImages?.map(carouselImage => ({
    id: carouselImage?.localFile?.url,
    url: carouselImage?.localFile?.url,
    fluid: carouselImage?.localFile?.childImageSharp?.fluid,
  }))

  const transitions = useTransition(
    coverImages?.[coverImageIndex],
    item => item?.id || '',
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  )

  useEffect(() => {
    const MAX_INDEX = (coverImages?.length ?? 1) - 1
    const timeout = setInterval(() => {
      if (indexRef?.current === MAX_INDEX) {
        indexRef.current = 0
      } else {
        indexRef.current = indexRef.current + 1
      }
      setCoverImageIndex(indexRef.current)
    }, 5000)

    return () => {
      if (timeout) {
        clearInterval(timeout)
      }
    }
  }, [])

  return (
    <Layout className="IndexPage">
      <Meta
        description="디지털 싱글 언제나의 발매에 앞서 컨셉
        일러스트와 새 굿즈들을 소개합니다!
        프로필 링크 또는 마플샵에서 밴드 이디어츠를 검색해주세요"
        imageUrl="https://idiots.band/images/eonjena.png"
        imageWidth={900}
        imageHeight={900}
      />
      <section className="cover-image-carousel">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} className="cover-image" style={props}>
            <Img
              fluid={item?.fluid}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </animated.div>
        ))}
      </section>
      <Container>
        <section className="IndexPage__contents">
          <section className="IndexPage__panels">
            <div className="IndexPage__newsPanels">
              <Panel title="News">
                <h2>💜👻언제나 티셔츠 판매개시!!👻💜</h2>
                안뇽! 디지털 싱글 <code>언제나</code>의 발매에 앞서 컨셉
                일러스트와 새 굿즈들을 소개합니다!
                <br /> 프로필 링크 또는 마플샵에서 밴드 이디어츠를 검색해주세요
                👻💜
                <h3>🌈색상</h3>
                <p>블랙, 로얄블루, 오렌지, 화이트, 세이프티 그린</p>
                <h3>✨주문방법</h3>
                <p>
                  <a
                    href="https://marpple.shop/kr/band_idiots"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    https://marpple.shop/kr/band_idiots
                  </a>{' '}
                  혹은 마플샵 검색창에 "밴드 이디어츠"
                  검색!
                </p>
                <p>
                  미리 만들어두는것이 아닌 주문 취합 후
                  제작하는 시스템으로 다소 시간이
                  걸립니다😖 주문시 예상 출고일을
                  확인해주세요!
                </p>
                <p>많은 관심 부탁드립니다 🎵👻</p>
                <img src="/images/eonjena.png" alt="언제나 커버 이미지" />
              </Panel>
              <Panel title="이디어츠 11월 스케쥴">
                <Img
                  fluid={
                    homeContent?.schedulePosters?.[0]?.localFile
                      ?.childImageSharp?.fluid
                  }
                  alt="이디어츠 11월 스케쥴"
                  loading="lazy"
                />
              </Panel>
            </div>
            <LiveList title="Live" lives={lives} />
          </section>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </section>
      </Container>
    </Layout>
  )
}
