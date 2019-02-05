import React, { ReactNode } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from './Layout'
import Container from './Container'
import Panel from './Panel'

import { Live } from 'types/models'

import './LiveDetail.scss'

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
  const live: Live = data.markdownRemark.frontmatter
  return (
    <Layout className="LiveDetail">
      <Container>
        <Panel title="Live">
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
      }
    }
  }
`