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
  코인클래식: 'https://www.instagram.com/coinclassic_official/',
  링고포레스트: 'https://www.instagram.com/ringoforest_official/',
  노앤써: 'https://www.instagram.com/noanswer.official/',
  사서함: 'https://www.instagram.com/saseoham10131110/',
  씩제프: 'https://www.instagram.com/sickjeffsickjeff/',
  스푼앤나이프: 'https://www.instagram.com/spoon_and_knife_/',
  비버타운: 'https://www.instagram.com/beavertown.official/',
  우희: 'https://www.instagram.com/woohee__official/',
  BLACKWOODENDOOR: 'https://www.instagram.com/blackwoodendoor/',
  HiteenPops: 'https://www.instagram.com/hi_teenpops/',
  'Dead Buttons': 'https://www.instagram.com/deadbuttons/',
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
            team
          )}
        </li>
      ))}
    </ul>
  )
}
