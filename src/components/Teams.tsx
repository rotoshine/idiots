import React from 'react'

interface Props {
  teams: string[]
}

const TEAMS_LINK: {
  [key: string]: string
} = {
  'RE:SETERS': 'https://www.instagram.com/the_reseters_official/',
  'ATOMIC WAVE': 'https://www.instagram.com/official_atomicwave/',
  알라리깡숑: 'https://www.instagram.com/_a.r.k.s._/',
  비포유슬립: 'https://www.instagram.com/band_beforeyousleep/',
  '11도': 'https://www.instagram.com/band_11degrees/',
  긍정편향: 'https://www.instagram.com/positivebias/',
  신나: 'https://www.instagram.com/sinna_aa/',
}

export default function Teams({ teams }: Props) {
  return (
    <ul>
      {teams.map((team: string) => (
        <li key={team} className="LiveDetail__team">
          {TEAMS_LINK[team] ? (
            <a href={TEAMS_LINK[team]} target="_blank">
              {team}
            </a>
          ) : (
            { teams }
          )}
        </li>
      ))}
    </ul>
  )
}
