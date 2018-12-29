import React, { Component } from 'react'
import { withRouter } from 'next/router'
import moment from 'moment'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Panel from '../components/Panel'

class LivePage extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''

    const res = await fetch(`${baseUrl}/static/data/live.json`)
    const lives = await res.json()

    return {
      lives
    }
  }
  render() {
    const { lives } = this.props
    return (
      <Layout>
        <div className="container">
          {!lives && <span>Loading...</span>}
          {lives && (
            <div className="live-wrapper">
              <Panel title="Live">
                <ul>
                  {lives.map((live) => (
                    <li key={live.id} className="live">
                      <div className="poster">
                        <img src={live.posterUrl} />
                      </div>
                      <div className="live-contents">
                        <div className="description">
                          <div className="label">공연명</div>
                          <div className="text">{live.title}</div>
                        </div>
                        <div className="description">
                          <div className="label">장소</div>
                          <div className="text">{live.place}</div>
                        </div>
                        <div className="description">
                          <div className="label">출연진</div>
                          <div className="text">
                            <ul>
                              {live.teams.map((team) => (
                                <li key={team} className="team">{team}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {live.eventLink && (
                          <div className="description">
                            <div className="label">INFO</div>
                            <div className="text">
                              <a href={live.eventLink} target="_blank">{live.eventLink}</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Panel>            
            </div>
          )}
        </div>
        <style jsx>{`
          ul {
            padding: 0;
          }

          li {
            list-style: none;
          }
          
          .live {
            display: flex;
            flex-direction: column;
          }

          .poster {
            width: 100%;
          }

          .poster img {
            width: 100%;
          }

          .live-contents {
            font-size: 2rem;
          }

          .description {
            padding-left: 2rem;
            margin-bottom: 2rem;
            min-height: 4.5rem;
          }

          .description .label {
            font-weight: bold;
            margin-bottom: 1rem;
            color: #999;
          }

          .description .text {          
            word-break: break-all;          
          }

          .team {
            margin-bottom: .8rem;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withRouter(LivePage)
