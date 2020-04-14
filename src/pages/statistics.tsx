import './statistics.scss'

import React, { useState, useEffect } from 'react'
import { last, isEmpty } from 'lodash'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Panel from '../components/Panel'
import Container from '../components/Container'
import InstagramProfile from '../components/InstagramProfile'

interface BandWithCount {
  name: string
  count: number
  instagramUrl: string
  lives: string[]
}

const extractInstagramUrl = (instagramUrl?: string) => {
  if (!isEmpty(instagramUrl)) {
    const urls = instagramUrl!.split('/')

    return last(urls) === '' ? urls[urls.length - 2] : last(urls)
  }
}

export default function StatsticsPage() {
  const [isFetching, setFetching] = useState(false)
  const [bandWithCounts, setBandWithCounts] = useState<BandWithCount[]>([])

  useEffect(() => {
    const findBandWithCount = async () => {
      setFetching(true)
      const res = await fetch('https://admin.idiots.band/bands/count-with-live')
      const result = (await res.json()) as BandWithCount[]
      setBandWithCounts(result)
      setFetching(false)
    }

    findBandWithCount()
  }, [])
  return (
    <Layout className="StatisticsPage">
      <Meta
        title={`밴드 이디어츠의 각종 통계`}
        path="/statistics"
        description="이디어츠와 관련된 각종 통계를 내본 페이지입니다. "
      />
      <Container>
        <Panel title="이디어츠와 공연을 많이 한 밴드">
          {isFetching && 'Loading...'}
          {!isFetching && (
            <section className="StatisticsPage__listWrapper">
              {bandWithCounts.map(({ name, instagramUrl, count }) => (
                <a key={name} href={instagramUrl ? instagramUrl : '#'}>
                  <article>
                    <InstagramProfile
                      instagramId={extractInstagramUrl(instagramUrl)}
                    />
                    <div className="StatisticsPage__listDescription">
                      <div>{name}</div>
                      <div>{count}번</div>
                    </div>
                  </article>
                </a>
              ))}
            </section>
          )}
        </Panel>
      </Container>
    </Layout>
  )
}
