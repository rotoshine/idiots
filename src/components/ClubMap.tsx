import './ClubMap.scss'

import React, { useEffect } from 'react'
import { IKakaoMaps } from 'tenel-kakao-map'

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
  고인물: {
    placeLink: 'https://place.map.kakao.com/1207259355',
    address: '서울 마포구 와우산로29길 66 지하 1층',
  },
}

interface Props {
  clubName: string
}
export default function ClubMap({ clubName }: Props) {
  const place = placeMapper[clubName]

  useEffect(() => {
    const renderStaticMap = () => {
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
      $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&libraries=services&autoload=false`
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
        <a href={place.placeLink} target="_blank">
          {clubName}
        </a>
      </div>
      {place && <div className="ClubMap__map"></div>}
    </div>
  )
}
