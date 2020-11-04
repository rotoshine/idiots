import './ClubMap.scss'

import React, { useEffect } from 'react'
import { loadMapScript, Kakao } from '../utils/kakaoMap'

interface Props {
  club: {
    name: string
    address: string
    placeLink: string
  }
}

declare var kakao: Kakao

export default function ClubMap({ club }: Props) {
  useEffect(() => {
    loadMapScript().then(() => {
      if (window.kakao) {
        const geocoder = new kakao.maps.services.Geocoder()

        geocoder.addressSearch(club.address, (result: any, status: any) => {
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
    })
  }, [])

  return (
    <div className="ClubMap">
      <div className="ClubMap__name">
        <a href={club.placeLink} target="_blank">
          {club.name}
        </a>
      </div>
      {club && <div className="ClubMap__map"></div>}
    </div>
  )
}
