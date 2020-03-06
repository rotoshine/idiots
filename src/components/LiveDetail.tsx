import './LiveDetail.scss'

import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { isEmpty, isArray } from 'lodash'

import { markdownRemarkToLive } from '../utils/dataConverter'
import Container from './Container'
import Layout from './Layout'
import Meta from './Meta'
import Panel from './Panel'
import { Poster, Live } from 'types/models'
import ClubMap from './ClubMap'
import { isString } from 'util'
import Teams from './Teams'

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
          dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }}
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
  const { place, teams = [], priceInfo, description = '', priceInfos } = live
  const descriptions = isEmpty(description)
    ? [`장소: ${place}`]
    : [description, `장소: ${place}`]

  if (teams.length > 0) {
    descriptions.push(`라인업: ${teams.join(', ')}`)
  }

  if (isArray(priceInfos) && priceInfos.length > 0) {
    descriptions.push(`가격: ${priceInfos.join(', ')}`)
  } else if (!isEmpty(priceInfo)) {
    descriptions.push(`가격: ${priceInfo}`)
  }

  return descriptions.join(' | ')
}

export default ({ data }: any) => {
  const live = markdownRemarkToLive(data) as Live

  const {
    title,
    description,
    place,
    teams = [],
    posterUrl,
    posterUrls,
    eventLink,
    priceInfo,
    ticketLink,
    priceInfos,
  } = live

  const representImage =
    posterUrls && posterUrls.length > 0 ? posterUrls[0] : null
  const representImageUrl =
    representImage !== null ? representImage.src : posterUrl
  const reprenstImageWidth =
    representImage !== null ? representImage.width : null
  const reprenstImageHeight =
    representImage !== null ? representImage.height : null

  return (
    <Layout className="LiveDetail">
      <Meta
        title={`밴드 이디어츠 공연 - ${live.title}`}
        imageUrl={representImageUrl}
        description={toMetaDescription(live)}
        path={live.slug}
        imageWidth={reprenstImageWidth}
        imageHeight={reprenstImageHeight}
      />
      <Container>
        <Panel title="Live" noBorder>
          {posterUrls &&
            posterUrls.map(({ src, alt }: Poster) => (
              <div key={src} className="LiveDetail__poster">
                <img src={src} alt={alt} />
              </div>
            ))}
          {!isEmpty(posterUrl) && (
            <div className="LiveDetail__poster">
              <img src={posterUrl} />
            </div>
          )}
          <div className="LiveDetail__contents">
            <Description label="공연명" content={title} />
            {!isEmpty(description) && (
              <Description label="내용" content={description} />
            )}
            {place && (
              <Description
                label="장소"
                content={<ClubMap clubName={place} />}
              />
            )}

            {teams.length > 0 && (
              <Description label="라인업" content={<Teams teams={teams} />} />
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
            {isArray(priceInfos) && priceInfos.length > 0 && (
              <Description label="Price" content={priceInfos} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        posterUrl
        posterUrls {
          src
          alt
          width
          height
        }
        description
        place
        teams
        eventLink
        priceInfo
        priceInfos
        ticketLink
      }
      fields {
        slug
      }
    }
  }
`
