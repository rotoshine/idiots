import Head from 'next/head';

const IndexPage = () => (
  <div className="app">
    <Head>
      <title>IDIOTS</title>
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
      display: flexl;
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
      justify-content: center;
      align-items: center;
      display: flex;
      flex: 1;
      color: #ffffff;
      font-size: 10em;
      font-style: italic;
    }
  `}</style>
  </div>
);

export default IndexPage;