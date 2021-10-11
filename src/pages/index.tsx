import './index.scss'

import { graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
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
  const {
    lives,
    homeContent,
  } = useStaticQuery<GatsbyTypes.IndexPageStaticQuery>(graphql`
    query IndexPageStatic {
      lives: allStrapiLives(sort: { fields: [date], order: DESC }, limit: 40) {
        ...LiveList_lives
      }
      homeContent: strapiHomeContent {
        schedulePosters {
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 700) {
                aspectRatio
                src
                srcSet
                sizes
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
        carouselImages {
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 1920) {
                aspectRatio
                src
                srcSet
                sizes
                base64
                tracedSVG
                srcWebp
                srcSetWebp
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
        description="👻 멍청이 펑크 밴드 이디어츠! 👻"
        imageUrl="https://idiots.band/images/logo-default.jpg"
        imageWidth={1080}
        imageHeight={567}
      />
      <section className="cover-image-carousel">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} className="cover-image" style={props}>
            <Img
              fluid={item?.fluid as FluidObject}
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
              {homeContent?.schedulePosters &&
                homeContent.schedulePosters.length > 0 && (
                  <Panel title="이디어츠 스케쥴!">
                    <Img
                      fluid={
                        homeContent.schedulePosters[0]?.localFile
                          ?.childImageSharp.fluid
                      }
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </Panel>
                )}
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
            </div>
            <LiveList title="Live" lives={lives} />
          </section>
          <TwitterTimeline className="IndexPage__twitterTimelineWrapper" />
        </section>
      </Container>
    </Layout>
  )
}
