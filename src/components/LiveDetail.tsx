import './LiveDetail.scss'

import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { isEmpty, isArray } from 'lodash'

import Container from './Container'
import Layout from './Layout'
import Meta from './Meta'
import Panel from './Panel'
import { Poster, Live } from 'types/models'
import ClubMap from './ClubMap'
import { isString } from 'util'
import Bands from './Bands'
import { createImagePath } from '../utils/image'

interface LiveRowProps {
  label: string
  content: string | string[] | ReactNode
}
const Description = ({ label, content }: LiveRowProps) => {
  const renderContent = (content: string | string[] | ReactNode) => {
    if (isArray(content)) {
      return (
        <div className="LiveDetail__content">
          <ul>
            {(content as string[]).map(c => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )
    } else if (isString(content)) {
      return (
        <div
          className="LiveDetail__content"
          dangerouslySetInnerHTML={{
            __html: `<div className="LiveDetail__content__html">${content}</div>`,
          }}
        ></div>
      )
    } else {
      return <div className="LiveDetail__content">{content}</div>
    }
  }
  return (
    <div className="LiveDetail__description">
      <div className="LiveDetail__label">{label}</div>
      {renderContent(content)}
    </div>
  )
}

const toMetaDescription = (live: Live) => {
  const { place, bands, priceInfo, seoDescription = '' } = live
  const descriptions = isEmpty(seoDescription)
    ? [`장소: ${place}`]
    : [seoDescription, `장소: ${place}`]

  if (bands.length > 0) {
    descriptions.push(`라인업: ${bands.map(band => band.name).join(', ')}`)
  }

  const stripTagRegex = /(<([^>]+)>)/gi
  if (!isEmpty(priceInfo)) {
    descriptions.push(`가격: ${priceInfo.replace(stripTagRegex, '')}`)
  }

  return descriptions.join(' | ')
}

export default ({ data }: any) => {
  const live = data.strapiLives as Live

  console.log(live)
  const {
    title,
    place,
    posters,
    bands = [],
    eventLink,
    priceInfo,
    ticketLink,
    content,
  } = live

  const representImage = posters[0]
  const representImageUrl = representImage.url

  return (
    <Layout className="LiveDetail">
      <Meta
        title={`밴드 이디어츠 공연 - ${live.title}`}
        imageUrl={createImagePath(representImageUrl)}
        description={toMetaDescription(live)}
        path={live.slug}
      />
      <Container>
        <Panel title="Live" noBorder>
          {posters.map(({ url }: Poster) => (
            <div key={url} className="LiveDetail__poster">
              <img
                src={createImagePath(url)}
                alt={`밴드 이디어츠 ${title} 공연 포스터`}
              />
            </div>
          ))}
          <div className="LiveDetail__contents">
            <Description label="공연명" content={title} />
            {!isEmpty(content) && (
              <Description label="내용" content={content} />
            )}
            {place && (
              <Description
                label="장소"
                content={<ClubMap clubName={place} />}
              />
            )}

            {bands.length > 0 && (
              <Description label="라인업" content={<Bands bands={bands} />} />
            )}
            {eventLink && (
              <Description
                label="공연 상세 정보"
                content={
                  <a href={eventLink} target="_blank">
                    {eventLink}
                  </a>
                }
              />
            )}
            {!isEmpty(priceInfo) && (
              <Description label="Price" content={priceInfo} />
            )}
            {!isEmpty(ticketLink) && (
              <Description
                label="에매링크"
                content={
                  <a href={ticketLink} target="__blank">
                    예매하기
                  </a>
                }
              />
            )}
          </div>
        </Panel>
        <div className="LiveDetail__footer">
          <Link to="/live">Move to List</Link>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiLives(slug: { eq: $slug }) {
      title
      date
      eventLink
      place
      posters {
        url
      }
      priceInfo
      seoDescription
      slug
      ticketLink
      bands {
        name
        instagramUrl
      }
    }
  }
`
