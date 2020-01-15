import './LiveDetail.scss'

import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { isEmpty } from 'lodash'

import { markdownRemarkToLive } from '../utils/dataConverter'
import Container from './Container'
import Layout from './Layout'
import Meta from './Meta'
import Panel from './Panel'
import { Poster, Live } from 'types/models'
import ClubMap from './ClubMap'

interface LiveRowProps {
  label: string
  content: string | ReactNode
}
const Description = ({ label, content }: LiveRowProps) => (
  <div className="LiveDetail__description">
    <div className="LiveDetail__label">{label}</div>
    {typeof content === 'string' ? (
      <div
        className="LiveDetail__content"
        dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }}
      ></div>
    ) : (
      <div className="LiveDetail__content">{content}</div>
    )}
  </div>
)

const toMetaDescription = (live: Live) => {
  const { place, teams = [], priceInfo, description = '' } = live
  const descriptions = [description, `장소: ${place}`]

  if (teams.length > 0) {
    descriptions.push(`라인업: ${teams.join(',')}`)
  }

  if (priceInfo) {
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
              <Description
                label="라인업"
                content={
                  <ul>
                    {teams.map((team: string) => (
                      <li key={team} className="LiveDetail__team">
                        {team}
                      </li>
                    ))}
                  </ul>
                }
              />
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
            {priceInfo && <Description label="Price" content={priceInfo} />}
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
        ticketLink
      }
      fields {
        slug
      }
    }
  }
`
