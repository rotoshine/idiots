import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'

import './contact.scss'

export default () => (
  <Layout className="Contact">
    <Container>
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
    </Container>
  </Layout>      
)
