import './LiveDetail.scss'

import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { markdownRemarkToLive } from '../utils/dataConverter'
import Container from './Container'
import Layout from './Layout'
import Meta from './Meta'
import Panel from './Panel'

interface LiveRowProps {
  label: string,
  text: string | ReactNode,
}
const Description = ({ label, text }: LiveRowProps) => (
  <div className="LiveDetail__description">
    <div className="LiveDetail__label">{label}</div>
    <div className="LiveDetail__text">{text}</div>
  </div>
)

export default ({ data }: any) => {
  const live = markdownRemarkToLive(data)

  const { teams = [] } = live

  return (
    <Layout className="LiveDetail">
      <Meta
        title={`Band Idiots - ${live.title}`}
        imageUrl={live.posterUrl}
        description={`장소: ${live.place} ${teams.length > 0 ? ` | 출연진: ${teams.join(',')}` : ''}`}
        path={live.slug}
      />
      <Container>
        <Panel title="Live" noBorder>
          <div className="LiveDetail__poster">
            <img src={live.posterUrl} />
          </div>
          <div className="LiveDetail__contents">
            <Description label="공연명" text={live.title} />
            <Description label="장소" text={live.place} />
            <Description label="출연진" text={
              <ul>
                {live.teams!.map((team: string) => (
                  <li key={team} className="LiveDetail__team">{team}</li>
                ))}
              </ul>
            } />
            {live.eventLink && (
              <Description label="INFO" text={(
                <a href={live.eventLink} target="_blank">{live.eventLink}</a>
              )} />
            )}
            {live.priceInfo && (
              <Description label="Price" text={live.priceInfo} />
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