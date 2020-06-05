import './LiveDetail.scss'

import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { ReactNode } from 'react'
import { isEmpty, isArray } from 'lodash'

import { isString } from 'util'
import { Live } from 'types/models'

import Container from './Container'
import Layout from './Layout'
import Meta from './Meta'
import Panel from './Panel'
import ClubMap from './ClubMap'
import Bands from './Bands'

interface LiveRowProps {
  label: string
  content: ReactNode
}
const Description = ({ label, content }: LiveRowProps) => {
  const renderContent = (content: ReactNode) => {
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
  const { club, bands, priceInfo, seoDescription = '' } = live
  const descriptions = isEmpty(seoDescription)
    ? [`장소: ${club.name}`]
    : [seoDescription, `장소: ${club.name}`]

  if (bands.length > 0) {
    descriptions.push(`라인업: ${bands.map(band => band.name).join(', ')}`)
  }

  const stripTagRegex = /(<([^>]+)>)/gi
  if (!isEmpty(priceInfo)) {
    descriptions.push(`가격: ${priceInfo.replace(stripTagRegex, '')}`)
  }

  return descriptions.join(' | ')
}

type Props = {
  data: GatsbyTypes.LiveDetailQuery
  context: {
    slug: string
  }
}
export default ({ data, context }: Props) => {
  const live = data.strapiLives

  if (!live) {
    throw new Error(`${context.slug}에 매치하는 Live 정보가 없습니다.`)
  }

  const {
    title,
    club,
    posters = [],
    bands = [],
    eventLink,
    priceInfo,
    ticketLink,
    content,
  } = live

  const representImage = posters[0]
  const representImageUrl = representImage?.localFile?.url

  return (
    <Layout className="LiveDetail">
      <Meta
        title={`밴드 이디어츠 공연 - ${live.title}`}
        imageUrl={representImageUrl}
        description={toMetaDescription(live as any)}
        path={`/live/${live.slug}/`}
      />
      <Container>
        <Panel title="Live" noBorder>
          {posters.map(poster => (
            <div key={poster?.localFile?.url} className="LiveDetail__poster">
              <Img
                fluid={poster?.localFile?.childImageSharp?.fluid}
                alt={`밴드 이디어츠 ${title} 공연 포스터`}
                loading="lazy"
              />
            </div>
          ))}
          <div className="LiveDetail__contents">
            <Description label="공연명" content={title} />
            {!isEmpty(content) && (
              <Description label="내용" content={content} />
            )}
            {club && (
              <Description label="장소" content={<ClubMap club={club} />} />
            )}

            {bands.length > 0 && (
              <Description
                label="라인업"
                content={<Bands bands={bands as any} />}
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
        <footer className="LiveDetail__footer">
          <Link to="/live">Move to List</Link>
        </footer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query LiveDetail($slug: String!) {
    strapiLives(slug: { eq: $slug }) {
      slug
      bands {
        name
        instagramUrl
      }
      date
      content
      eventLink
      club {
        name
        placeLink
        address
      }
      posters {
        localFile {
          url
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      priceInfo
      seoDescription
      ticketLink
      title
    }
  }
`
