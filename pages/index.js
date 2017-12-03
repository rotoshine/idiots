import React, { Component } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';

const isDev = process.env.NODE_ENV !== 'production';

const title = 'Band IDIOTS';
const url = isDev ? 'http://localhost:3000' : 'https://idiots.band';
const description = `
Punk Rock Band Idiots.
Vocal/Guitar 최효근 | 
Vocal/Guitar 문주나 |
Bass 김태희 |
Keyboard 박시영 |
Drum 박태용 
`;
const image = `${url}/static/images/logo.jpg`;

const GACode = 'UA-49604777-10';

export default class IndexPage extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(GACode);
      console.log(`GA Init: ${GACode}`);
      window.GA_INITIALIZED = true;
    }

    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="app">
        <Head>
          <title>Band IDIOTS</title>
          <link rel="canonical" href={url} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1147" />
          <meta property="og:image:height" content="1147" />
          <meta name="twitter:card" value="summary_large_image" />
          <meta name="twitter:site" content="@winterwolf0412" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Head>
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
    
        @-moz-keyframes spin {
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
        }
      `}</style>
      </div>
    );
  }
}
