import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Panel from '../components/Panel'

export default class IndexPage extends Component {
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
        <div className="background-wrapper">
          <img className="cover-image" src="/static/images/main.jpeg" width="100%"/>          
        </div>
        <div className="container">
          <div className="panels">
            <Panel title="News">
              <ul className="newsList">
                <li>이디어츠 홈페이지가 개설되었습니다.</li>
              </ul>          
            </Panel>
            <Panel title="Live">
              <ul className="newsList">
                {!lives && <span>loaindg..</span>}
                {lives && lives.map((live) => (
                  <li key={live.id}>
                    <Link href={`/live/${live.id}`}><a>{live.title}</a></Link>
                  </li>
                ))}
              </ul>          
            </Panel>
          </div>
        </div>
        <style jsx>{`
          .panels {
            margin-top: 1rem;
            flex-direction: row;
            display: flex;
          }

          .newsList {
            padding: 0;
            list-style: none;
          }

          @media only screen and (max-width: 768px) {
            .panels {
              flex-direction: column;
            }

            .panels {
              margin-bottom: 1rem;
            }
          }
        `}</style>
      </Layout>      
    );
  }
}
