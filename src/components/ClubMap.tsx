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

interface Props {
  club: {
    name: string
    address: string
    placeLink: string
  }
}
export default function ClubMap({ club }: Props) {
  useEffect(() => {
    const renderStaticMap = () => {
      if (!kakao) {
        return
      }

      const geocoder = new kakao.maps.services.Geocoder()

      geocoder.addressSearch(club.address, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const $map = document.querySelector('.ClubMap__map') as HTMLDivElement

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
        <a href={club.placeLink} target="_blank">
          {club.name}
        </a>
      </div>
      {club && KAKAO_API_KEY && <div className="ClubMap__map"></div>}
    </div>
  )
}
