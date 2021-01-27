import './InstagramProfile.scss'

import React from 'react'

interface Props {
  profileImageUrl?: string
}

export default function InstagramProfile({ profileImageUrl }: Props) {
  return (
    <div
      className="InstagramProfile"
      style={{
        backgroundImage: `url('${profileImageUrl}')`,
      }}
    >
      <div className="InstagramProfile__status">
        {!profileImageUrl && 'profile not found...'}
      </div>
    </div>
  )
}
