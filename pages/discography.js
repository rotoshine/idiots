import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Panel from '../components/Panel';

export default class DiscographyPage extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''

    const res = await fetch(`${baseUrl}/static/data/album.json`)
    const albums = await res.json()

    return {
      albums
    }
  }
  render() {
    const { albums } = this.props

    return (
      <Layout>
        <div className="container">
          <Panel title="Discography">
            <div className="disc-list">
              {albums && albums.map((album) => (
                <div className="album" key={album.id}>
                  <div className="album-image" style={{ backgroundImage: `url('${album.imageUrl}')` }}>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
        <style jsx>{`
          .disc-list {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            width: 100%;
          } 
          
          .album {                     
            width: 25%;
            padding: 1.5rem;
            box-sizing: border-box;
          }

          .album-image {
            background-position: center;
            background-size: cover;            
            width: 100%;
            transition: all .2s ease-in-out;
          }

          .album-image:after {
            display: block;
            content: "";
            padding-bottom: 100%;
          }
          
          .album-image:hover {
            cursor: pointer;
            transform: scale(1.02);            
            background-color: rgba(0, 0, 0, 0.7);
          }
          
          @media only screen and (max-width: 1366px) {
            li {
              width: 50%;
            }
          }

          @media only screen and (max-width: 768px) {
            li {
              width: 100%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
