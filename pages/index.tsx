import styles from './index.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Container from '../components/Containter'
import { animated, config, useTransition } from 'react-spring'
import { GetStaticProps } from 'next'
import Panel from '../components/Panel'
import LiveList from '../components/LiveList'

interface Props {
  homeContent: {
    carouselImages: any
    schedulePosters: any
  }
  lives: any
}

export default function IndexPage({ homeContent, lives }: Props) {
  const [coverImageIndex, setCoverImageIndex] = useState(0)
  const indexRef = useRef(coverImageIndex)

  const coverImages = homeContent?.carouselImages

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
    <Layout className={styles.IndexPage}>
      <Meta
        description="디지털 싱글 언제나의 발매에 앞서 컨셉
        일러스트와 새 굿즈들을 소개합니다!
        프로필 링크 또는 마플샵에서 밴드 이디어츠를 검색해주세요"
        imageUrl="https://idiots.band/images/eonjena.png"
        imageWidth={900}
        imageHeight={900}
      />
      <section className={styles['cover-image-carousel']}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            className={styles['cover-image']}
            style={props}
          >
            <Image
              src={`https://idiots.roto.codes/${item?.url}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="idiots cover image"
            />
          </animated.div>
        ))}
      </section>
      <Container>
        <section className={styles.IndexPage__contents}>
          <section className={styles.IndexPage__panels}>
            <div className={styles.IndexPage__newsPanels}>
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
                <Image
                  src="/images/eonjena.png"
                  alt="언제나 커버 이미지"
                  width={500}
                  height={500}
                />
              </Panel>
              <Panel title="이디어츠 11월 스케쥴" style={{ marginTop: 16 }}>
                <div style={{ position: 'relative', height: 600 }}>
                  <Image
                    src={`https://idiots.roto.codes/${homeContent.schedulePosters[0].url}`}
                    alt="이디어츠 11월 스케쥴"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Panel>
            </div>
            <LiveList lives={lives} />
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const homeContetsRes = await axios.get(
    'https://idiots.roto.codes/home-contents'
  )
  const livesRes = await axios.get(
    'https://idiots.roto.codes/lives?date_gte=2020-01-01&_sort=date:DESC'
  )
  return {
    props: {
      homeContent: homeContetsRes.data[0],
      lives: livesRes.data,
    },
    revalidate: 3000,
  }
}
