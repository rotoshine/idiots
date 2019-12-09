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

interface LiveRowProps {
  label: string
  text: string | ReactNode
}
const Description = ({ label, text }: LiveRowProps) => (
  <div className="LiveDetail__description">
    <div className="LiveDetail__label">{label}</div>
    <div className="LiveDetail__text">{text}</div>
  </div>
)

const toMetaDescription = (live: Live) => {
  const { place, teams = [], priceInfo = '' } = live
  return `장소: ${place} ${
    teams.length > 0 ? ` | 출연진: ${teams.join(',')}` : ''
  } ${priceInfo}`
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
        title={`Band Idiots 공연 - ${live.title}`}
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
            <Description label="공연명" text={title} />
            {!isEmpty(description) && (
              <Description label="내용" text={description} />
            )}
            <Description label="장소" text={place} />
            <Description
              label="출연진"
              text={
                <ul>
                  {teams.map((team: string) => (
                    <li key={team} className="LiveDetail__team">
                      {team}
                    </li>
                  ))}
                </ul>
              }
            />
            {eventLink && (
              <Description
                label="INFO"
                text={
                  <a href={eventLink} target="_blank">
                    {eventLink}
                  </a>
                }
              />
            )}
            {priceInfo && <Description label="Price" text={priceInfo} />}
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
      }
      fields {
        slug
      }
    }
  }
`
