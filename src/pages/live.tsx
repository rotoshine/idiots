import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'

import { Live } from '../types/models'

import './live.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allLiveJson {
          edges {
            node {
              liveId
              title
              posterUrl
              place
              teams
              eventLink
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <div className="live-wrapper">
            <Panel title="Live">
              <ul>
                {data.allLiveJson.edges.map(({ node }: { node: Live }) => (
                  <li key={node.liveId} className="live">
                    <div className="poster">
                      <img src={node.posterUrl} />
                    </div>
                    <div className="live-contents">
                      <div className="description">
                        <div className="label">공연명</div>
                        <div className="text">{node.title}</div>
                      </div>
                      <div className="description">
                        <div className="label">장소</div>
                        <div className="text">{node.place}</div>
                      </div>
                      <div className="description">
                        <div className="label">출연진</div>
                        <div className="text">
                          <ul>
                            {node.teams.map((team) => (
                              <li key={team} className="team">{team}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {node.eventLink && (
                        <div className="description">
                          <div className="label">INFO</div>
                          <div className="text">
                            <a href={node.eventLink} target="_blank">{node.eventLink}</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </Container>
      </Layout>
    )}
  />
)
