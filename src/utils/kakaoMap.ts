import { IKakaoMaps } from 'tenel-kakao-map'

const KAKAO_API_KEY = process.env.GATSBY_KAKAO_API_KEY

export interface KakaoMaps extends IKakaoMaps {
  load: any
  services: {
    Geocoder: any
    Status: any
  }
}

export interface Kakao {
  maps: KakaoMaps
}

declare var kakao: Kakao

export const loadMapScript = () => {
  return new Promise(resolve => {
    const $sdk = document.querySelector('#kakao-sdk')

    if ($sdk) {
      return resolve()
    } else {
      const $script = document.createElement('script')
      $script.id = 'kakao-sdk'
      $script.type = 'text/javascript'
      $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`
      $script.onload = () => {
        kakao.maps.load(() => {
          return resolve()
        })
      }

      document.querySelector('head')?.appendChild($script)
    }
  })
}
