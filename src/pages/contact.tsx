import React from 'react'

import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Panel from '../components/Panel'

import './contact.scss'

export default () => (
  <Layout className="Contact">
    <Meta
      title="이디어츠(Idiots) 섭외 문의"
      description="리더 최효근의 메일이나 이디어츠의 SNS를 통해 연락주세요."
    />
    <Container>
      <Panel title="홈페이지 관련 문의">
        <ul>
          <li>
            <a href="https://twitter.com/winterwolf0412" target="_blank">
              <i className="icon ion-logo-twitter"/> @winterwolf0412
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
              <i className="icon ion-logo-facebook"/> https://www.facebook.com/bandidiots/
            </a>
          </li>
          <li>
          </li>
          <li>
            <a href="https://twitter.com/bullwoostar" target="_blank">
              <i className="icon ion-logo-twitter"/> @bullwoostar
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
