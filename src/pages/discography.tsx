import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Panel from '../components/Panel';
import { Album } from 'types/models';

import './discography.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allAlbumJson {
          edges {
            node {
              albumId
              title
              imageUrl
              releaseYear
            }
          }
        }
      }
    `}
    render={data => (
      <Layout className="Discography">
        <Container>
          <Panel title="Discography">
            <div className="Discography__list">
              {data.allAlbumJson.edges.map(({ node } : { node: Album }) => (
                <div className="Discography__album" key={node.albumId}>
                  <div className="Discography__albumImage" style={{ backgroundImage: `url('${node.imageUrl}')` }}>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Container>
      </Layout>
    )}
  />
)
