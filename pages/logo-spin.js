import React, { Component } from 'react'

import Layout from '../components/Layout'

export default class LogoSpinPage extends Component {
  render() {
    return (
      <Layout title="IDIOTS가 돈다 돌아" path="logo-spin">
        <div className="index-page">
          <div className="idiot-text">IDIOTS</div>
        </div>
        <style jsx global>{`
          html, body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
          }
        `}</style>
          <style jsx>{`
            .index-page {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              flex: 1;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
            }
        
            .idiot-text {
              font-family: '굴림';
              justify-content: center;
              align-items: center;
              display: flex;
              flex: 1;
              color: #ffffff;
              font-size: 10em;
              font-style: italic;
              animation-name: spin;
              animation-duration: 100ms;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
              font-weight: 500;
              letter-spacing: 5px;
            }       
          `}</style>
          <style>
            {`@-moz-keyframes spin {
              from { -moz-transform: rotate(0deg); }
              to { -moz-transform: rotate(360deg); }
            }
            @-webkit-keyframes spin {
                from { -webkit-transform: rotate(0deg); }
                to { -webkit-transform: rotate(360deg); }
            }
            @keyframes spin {
                from {transform:rotate(0deg);}
                to {transform:rotate(360deg);}
            }`}
          </style>          
      </Layout>      
    )
  }
}
