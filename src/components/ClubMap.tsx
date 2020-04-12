import './ClubMap.scss'

import React, { useEffect } from 'react'
import { IKakaoMaps } from 'tenel-kakao-map'

const KAKAO_API_KEY = process.env.GATSBY_KAKAO_API_KEY

interface KakaoMaps extends IKakaoMaps {
  load: any
  services: {
    Geocoder: any
    Status: any
  }
}
interface Kakao {
  maps: KakaoMaps
}

declare var kakao: Kakao

const placeMapper: {
  [key: string]: {
    placeLink: string
    address: string
  }
} = {
  'Club 빵': {
    placeLink: 'https://place.map.kakao.com/10449951',
    address: '서울 마포구 와우산로29길 12',
  },
  'Club FF': {
    placeLink: 'https://place.map.kakao.com/13494735',
    address: '서울 마포구 와우산로17길 12',
  },
  'Club Sharp': {
    placeLink: 'https://place.map.kakao.com/527881183',
    address: '서울 마포구 동교로 63 지하1층',
  },
  고인물: {
    placeLink: 'https://place.map.kakao.com/1207259355',
    address: '서울 마포구 와우산로29길 66 지하 1층',
  },
  에반스라운지: {
    placeLink: 'https://place.map.kakao.com/16587801',
    address: '서울 마포구 독막로9길 9',
  },
  Bender: {
    placeLink:
      'https://map.naver.com/v5/search/%EB%B2%A4%EB%8D%94/place/1772316440?c=14128118.6902338,4516064.4484304,14,0,0,0,dh',
    address: '서울 마포구 와우산로14길 4 지층1',
  },
}

interface Props {
  clubName: string
}
export default function ClubMap({ clubName }: Props) {
  const place = placeMapper[clubName]

  useEffect(() => {
    const renderStaticMap = () => {
      if (!kakao) {
        return;
      }

      if (place) {
        const geocoder = new kakao.maps.services.Geocoder()

        geocoder.addressSearch(place.address, (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const $map = document.querySelector(
              '.ClubMap__map'
            ) as HTMLDivElement

            if ($map && result.length > 0) {
              const { x, y } = result[0]
              const markerPosition = new kakao.maps.LatLng(y, x)
              const marker = {
                position: markerPosition,
              }

              const mapOption = {
                center: markerPosition,
                level: 3,
                marker,
              }

              new kakao.maps.StaticMap($map, mapOption)
            }
          }
        })
      }
    }

    const $sdk = document.querySelector('#kakao-sdk')

    if ($sdk) {
      renderStaticMap()
    } else {
      const $script = document.createElement('script')
      $script.id = 'kakao-sdk'
      $script.type = 'text/javascript'
      $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`
      $script.onload = () => {
        kakao.maps.load(() => {
          renderStaticMap()
        })
      }

      document.querySelector('head')?.appendChild($script)
    }
  }, [])

  return (
    <div className="ClubMap">
      <div className="ClubMap__name">
        <a href={place ? place.placeLink : '#'} target="_blank">
          {clubName}
        </a>
      </div>
      {place && KAKAO_API_KEY && <div className="ClubMap__map"></div>}
    </div>
  )
}
