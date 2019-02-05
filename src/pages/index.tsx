import { graphql, StaticQuery, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel'

import { Live, QueryNode } from '../types/models'

import './index.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allLiveJson {
          edges {
            node {
              liveId
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <img className="cover-image" src="/images/main.jpeg" width="100%" />
        <Container>
          <div className="panels">
            <Panel title="News">
              <ul className="newsList">
                <li>이디어츠 홈페이지가 개설되었습니다.</li>
              </ul>
            </Panel>
            <Panel title="Live">
              <ul className="newsList">
                {data.allLiveJson && data.allLiveJson.edges.map((live: QueryNode<Live>) => (
                  <li key={live.node.liveId}>
                    <Link to={`/live/${live.node.liveId}`}>{live.node.title}</Link>
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