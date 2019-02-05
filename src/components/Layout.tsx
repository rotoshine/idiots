import * as Sentry from '@sentry/browser'
import React, { Component, Fragment } from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

import Logo from './Logo'
import Nav from './Nav'

import './Layout.scss'

const { NODE_ENV, GATSBY_SENTRY_DSN, GATSBY_GA } = process.env

const isDev = NODE_ENV !== 'production'

const DEFAULT_TITLE = 'Band IDIOTS'
const DEFAULT_URL = isDev ? 'http://localhost:8000' : 'https://idiots.band'
const DEFAULT_DESCRIPTION = `
We are Punk Rock Band Idiots.
Vocal/Guitar 최효근 | 
Vocal/Guitar 문주나 |
Bass 김태희 |
Keyboard 박시영 |
Drum 박태용 
`
const DEFAULT_IMAGE_URL = `${DEFAULT_URL}/images/main.jpeg`

interface Props {
  title?: string,
  meta?: any,
  className?: string,
}

export default class Layout extends Component<Props> {
  renderHead() {
    const { meta = {} } = this.props
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
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@winterwolf0412" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
    )
  }

  render() {
    const { className = '', children } = this.props

    return (
      <div className="App">
        {this.renderHead()}
        <header>
          <Logo />
          <Nav />
        </header>
        <div className={className}>
          {children}
        </div>
      </div>
    )
  }
}
