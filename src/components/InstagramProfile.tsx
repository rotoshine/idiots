import './InstagramProfile.scss'

import React, { useState, useEffect } from 'react'
import { camelizeKeys } from 'humps'

interface Props {
  instagramId?: string
}

export default function InstagramProfile({ instagramId }: Props) {
  const [isFetching, setFetching] = useState<boolean>(false)
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const fetchInstagramProfile = async (instagramId: string) => {
      try {
        setFetching(true)
        const res = await fetch(
          `https://www.instagram.com/${instagramId}/?__a=1`
        )
        const result = await res.json()

        if (result) {
          setProfile(camelizeKeys(result))
        }
      } catch (e) {
        setProfile(null)
      } finally {
        setFetching(false)
      }
    }
    console.log(instagramId)
    if (instagramId) {
      fetchInstagramProfile(instagramId)
    }
  }, [])
  return (
    <div
      className="InstagramProfile"
      style={{
        backgroundImage: `url('${profile?.graphql?.user?.profilePicUrlHd}')`,
      }}
    >
      <div className="InstagramProfile__status">
        {isFetching && 'loading..'}
        {!isFetching && !profile && 'profile not found...'}
      </div>
    </div>
  )
}
