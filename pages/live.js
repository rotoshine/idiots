import React, { Component } from 'react';

import Layout from '../components/Layout';

export default class LivePage extends Component {
  render() {
    return (
      <Layout>
        <div className="cover-image" />
        <div className="container">        
          coming soon....
        </div>
        <style jsx>{`
          .cover-image {
            padding: 0;                        
            width: 100%;
            height: 500px;    
            background-image: url('/static/images/bg.jpg');
            background-position: center;
            background-size: cover;
          }   
        `}</style>
      </Layout>      
    );
  }
}
