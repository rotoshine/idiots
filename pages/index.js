import React, { Component } from 'react';

import Layout from '../components/Layout';

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="background-wrapper">
          <img className="cover-image" src="/static/images/idiots.jpg" width="100%"/>          
        </div>
      </Layout>      
    );
  }
}
