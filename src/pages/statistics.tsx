import './statistics.scss'

import React, { useState, useEffect } from 'react'
import { last, isEmpty } from 'lodash'

import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Panel from '../components/Panel'
import Container from '../components/Container'
import InstagramProfile from '../components/InstagramProfile'
import { Link } from 'gatsby'

interface BandWithCount {
  name: string
  count: number
  profileImageUrl: string
  instagramUrl: string
  lives: string[]
  rank: number
}

const extractInstagramUrl = (instagramUrl?: string) => {
  if (!isEmpty(instagramUrl)) {
    const urls = instagramUrl!.split('/')

    return `@${last(urls) === '' ? urls[urls.length - 2] : last(urls)}`
  }

  return null
}

export default function StatsticsPage() {
  const [isFetching, setFetching] = useState(false)
  const [bandWithCounts, setBandWithCounts] = useState<BandWithCount[]>([])

  useEffect(() => {
    const findBandWithCount = async () => {
      setFetching(true)
      const res = await fetch('https://idiots.roto.codes/bands/count-with-live')
      const result = (await res.json()) as BandWithCount[]
      setBandWithCounts(result)
      setFetching(false)
    }

    findBandWithCount()
  }, [])

  const renderMedal = (rank: number) => {
    if (rank >= 1 && rank <= 3) {
      return (
        <div className="StatisticsPage__medal">
          <img
            src={`/images/medals/rank-${rank}-medal.png`}
            alt={`rank ${rank} icon`}
          />
        </div>
      )
    }

    return null
  }
  return (
    <Layout className="StatisticsPage">
      <Meta
        title={`밴드 이디어츠의 각종 통계`}
        path="/statistics"
        description="이디어츠와 관련된 각종 통계를 내본 페이지입니다. "
      />
      <Container>
        <Panel title="이디어츠와 함께 했던 밴드들">
          {isFetching && 'Loading...'}
          {!isFetching && (
            <section className="list-wrapper">
              {bandWithCounts.map(
                ({ name, instagramUrl, profileImageUrl, count, rank }) => (
                  <a key={name} href={instagramUrl ? instagramUrl : '#'}>
                    <article className="list-item">
                      {renderMedal(rank)}
                      <InstagramProfile profileImageUrl={profileImageUrl} />
                      <div className="description">
                        <div className="band-name">{name}</div>
                        <div className="live-count">
                          같이 {count}번 공연했어요.
                        </div>
                        <div className="instagram-id">
                          {extractInstagramUrl(instagramUrl)}
                        </div>
                      </div>
                    </article>
                  </a>
                )
              )}
            </section>
          )}
        </Panel>
        <footer>
          <Link to="/live">Move to List</Link>
        </footer>
      </Container>
    </Layout>
  )
}
