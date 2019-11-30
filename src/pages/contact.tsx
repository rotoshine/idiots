import './contact.scss'

import React from 'react'

import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Panel from '../components/Panel'

export default function ContactPage() {
  return (
    <Layout className="Contact">
      <Meta
        title="이디어츠(Idiots) 섭외 문의"
        description="yeonrock@idiots.mail 이나 이디어츠의 각종 SNS를 통해 연락주세요. 섭외문의 기다립니다!!!"
      />
      <Container>
        <Panel title="홈페이지 관련 문의">
          <ul>
            <li>
              <a href="https://twitter.com/winterwolf0412" target="_blank">
                <i className="icon ion-logo-twitter" /> @winterwolf0412
              </a>
            </li>
            <li>
              <a href="https://roto.dev" target="_blank">
                <i className="icon ion-md-link" />
                ROTO's Page
              </a>
            </li>
            <li></li>
          </ul>
        </Panel>
        <Panel title="섭외 및 각종 밴드 관련 문의">
          <ul>
            <li>
              <a href="https://www.facebook.com/bandidiots/" target="_blank">
                <i className="icon ion-logo-facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/idiots.band" target="_blank">
                <i className="icon ion-logo-instagram" /> instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bullwoostar" target="_blank">
                <i className="icon ion-logo-twitter" /> @bullwoostar
              </a>
            </li>
            <li>
              <a href="mailto:yeonrock@idiots.band">
                <i className="icon ion-ios-mail" /> yeonrock@idiots.band
              </a>
            </li>
            <li>
              <a href="mailto:ccatal66@naver.com">
                <i className="icon ion-ios-mail" /> ccatal66@naver.com
              </a>
            </li>
          </ul>
        </Panel>
      </Container>
    </Layout>
  )
}
