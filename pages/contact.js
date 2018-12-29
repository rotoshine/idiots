import React, { Component } from 'react'

import Layout from '../components/Layout'

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div>
            <i className="icon ion-social-facebook-outline"/>facebook: 
            <a href="https://www.facebook.com/bandidiots/" target="_blank">https://www.facebook.com/bandidiots/</a>
          </div>   
          <div>
            <i className="icon ion-social-twitter-outline"/>TWITTER: 
            <a href="https://twitter.com/bullwoostar" target="_blank">@bullwoostar</a>
          </div>
          <div>
            <i className="icon ion-social-twitter-outline"/>TWITTER: 
            <a href="https://twitter.com/winterwolf0412" target="_blank">@winterwolf0412</a>
          </div>          
        </div>
        <style jsx>{`
          .container {
            line-height: 1.5rem;            
          }
        `}</style>
      </Layout>      
    )
  }
}
