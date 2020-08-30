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

export default function IndexPage() {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)
  const { lives, homeContent } = useStaticQuery<
    GatsbyTypes.IndexPageStaticQuery
  >(graphql`
    query IndexPageStatic {
      lives: allStrapiLives(sort: { fields: [date], order: DESC }, limit: 16) {
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
            <Panel title="News">
              <ul className="IndexPage__newsList">
                <li>
                  <section>
                    <h2>💜👻악당출현 티셔츠 판매개시!!👻💜</h2>
                    현재 디지털 싱글 준비중에 앞서
                    악당출현 컨셉 일러스트의 티셔츠를
                    먼저 판매합니다🎵
                    <h3>🌈색상</h3>
                    <p>
                      화이트, 오렌지, 로얄블루, 네이비, 블랙
                    </p>
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
                      미리 만들어두는것이 아닌 주문 취합
                      후 제작하는 시스템으로 다소 시간이
                      걸립니다😖 주문시 예상 출고일을
                      확인해주세요!
                    </p>
                    <p>많은 관심 부탁드립니다 🎵👻</p>
                    <img src="/images/adch.jpg" alt="악당출현! 모델샷" />
                  </section>
                </li>
                {/* 
                <li>
                  <Img
                    fluid={
                      homeContent?.schedulePosters?.[0]?.localFile
                        ?.childImageSharp?.fluid
                    }
                    alt="이디어츠 8월 스케쥴"
                    loading="lazy"
                  />
                </li>
                */}
              </ul>
            </Panel>
            <LiveList title="Live" lives={lives} />
          </section>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </section>
      </Container>
    </Layout>
  )
}
