import React, { Fragment, Component } from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import ReactGA from 'react-ga'
import * as Sentry from '@sentry/browser';

import Logo from './Logo'
import Nav from './Nav'

const { publicRuntimeConfig } = getConfig()
const { NODE_ENV, GA, SENTRY_DSN } = publicRuntimeConfig

const isDev = NODE_ENV !== 'production'

const DEFAULT_TITLE = "Band IDIOTS"
const DEFAULT_URL = isDev ? 'http://localhost:3000' : 'https://idiots.band'
const DEFAULT_DESCRIPTION = `
We are Punk Rock Band Idiots.
Vocal/Guitar 최효근 | 
Vocal/Guitar 문주나 |
Bass 김태희 |
Keyboard 박시영 |
Drum 박태용 
`
const DEFAULT_IMAGE_URL = `${DEFAULT_URL}/static/images/main.jpeg`


export default class Layout extends Component {
  componentDidMount() {
    if (!isDev && !window.SENTRY_INITIALIZED && SENTRY_DSN) {
      Sentry.init({
        dsn: SENTRY_DSN,
        environment: isDev ? 'dev' : 'prod'
      })
      console.log(`Sentry Init: ${SENTRY_DSN}`)
      window.SENTRY_INITIALIZED = true
    }

    if (!window.GA_INITIALIZED && GA) {
      ReactGA.initialize(GA)
      console.log(`GA Init: ${GA}`)
      window.GA_INITIALIZED = true
    }
    const { pathname } = window.location

    if (window.GA_INITIALIZED) {
      ReactGA.set({ page: pathname })
      ReactGA.pageview(pathname)
    }
  }

  renderMeta() {
    const { meta = {} } = this.props;
    const {
      title = DEFAULT_TITLE,
      path = '',
      description = DEFAULT_DESCRIPTION,
      imageUrl = DEFAULT_IMAGE_URL,
      imageWidth = 1370,
      imageHeight = 635
    } = meta

    const url = `${DEFAULT_URL}/${path}`

    return (
      <Fragment>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta name="twitter:card" value="summary_large_image" />
        <meta name="twitter:site" content="@winterwolf0412" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Fragment>
    );
  }

  render() {
    const { title = DEFAULT_TITLE, children } = this.props;

    return (
      <div className="app">
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {this.renderMeta()}
        </Head>
        <header>
          <Logo />
          <Nav />
        </header>
        {children}
        <style jsx global>{`
          @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

          @font-face {
            font-family: 'xtryme';
            src: url('/static/fonts/xtryme.woff2') format('woff2'),
                url('/static/fonts/xtryme.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'AHDN';
            src: url('/static/fonts/AHDN.woff2') format('woff2'),
                url('/static/fonts/AHDN.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'Spire NBP';
            src: url('/static/fonts/Spire-NBP.woff2') format('woff2'),
                url('/static/fonts/Spire-NBP.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          
          html {
            font-size: 10px;
          }

          html, body {
            margin: 0;
            font-family: 'Spire NBP', 'Noto Sans KR', serif;
          }
          
          .app {
            display: flex;
            flex-direction: column;
          }
        
          .container {
            width: 100%;
            max-width: 1366px;
            margin: 0 auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          a { 
            color: inherit; 
          } 
          a:visited {
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }
}
