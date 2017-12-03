import React, { Component } from "react";
import Head from "next/head";
import ReactGA from "react-ga";

import Logo from './Logo';
import Nav from './Nav';

const isDev = process.env.NODE_ENV !== "production";

const DEFAULT_TITLE = "Band IDIOTS";
const DEFAULT_URL = isDev ? "http://localhost:3000" : "https://idiots.band";
const DEFAULT_DESCRIPTION = `
Punk Rock Band Idiots.
Vocal/Guitar 최효근 | 
Vocal/Guitar 문주나 |
Bass 김태희 |
Keyboard 박시영 |
Drum 박태용 
`;
const DEFAULT_IMAGE_URL = `${DEFAULT_URL}/static/images/logo.jpg`;

const GACode = "UA-49604777-10";

export default class Layout extends Component { 
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(GACode);
      console.log(`GA Init: ${GACode}`);
      window.GA_INITIALIZED = true;
    }
    const { pathname } = window.location;

    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }

  renderMeta() {
    const { meta = {}} = this.props;    
    const {
      title = DEFAULT_TITLE,
      path = '',
      description = DEFAULT_DESCRIPTION,
      imageUrl = DEFAULT_IMAGE_URL,
      imageWidth = 1147,
      imageHeight = 1147
    } = meta;

    const url = `${DEFAULT_URL}/${path}`;

    return [
      <link key={1} rel="canonical" href={url} />,
      <meta key={2} name="description" content={description} />,
      <meta key={3} property="og:title" content={title} />,
      <meta key={4} property="og:type" content="article" />,
      <meta key={5} property="og:url" content={url} />,
      <meta key={6} property="og:description" content={description} />,
      <meta key={7} property="og:image" content={imageUrl} />,
      <meta key={8} property="og:image:width" content={imageWidth} />,
      <meta key={9} property="og:image:height" content={imageHeight} />,
      <meta key={10} name="twitter:card" value="summary_large_image" />,
      <meta key={11} name="twitter:site" content="@winterwolf0412" />,
      <meta key={12} name="twitter:title" content={title} />,
      <meta key={13} name="twitter:description" content={description} />,
      <meta key={14} name="twitter:image" content={imageUrl} />
    ];
  }
  render() {
    const { title = DEFAULT_TITLE, children } = this.props;

    return (
      <div className="app">
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />         
          <link href="https://fonts.googleapis.com/earlyaccess/nanumgothic.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Slackey" rel="stylesheet" />          
          <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-7/css/ionicons.min.css" rel="stylesheet" />
          {this.renderMeta()}
        </Head>
        <Logo />
        <Nav />
        {children}
        <style jsx global>{`
          html, body {
            margin: 0;
            font-family: 'Nanum Gothic', serif;
          }
          
          .container {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}
