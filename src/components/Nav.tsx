import './Nav.scss'

import { Link } from 'gatsby'
import React from 'react'

const menus = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'live',
    path: '/live',
  },
  {
    name: 'discography',
    path: '/discography',
  },
  {
    name: 'photos',
    path: '/photos',
  },
  {
    name: 'movies',
    path: '/movies',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]
export default function Nav() {
  return (
    <nav className="Nav">
      {menus.map((menu, i) => {
        return (
          <Link className="Nav__menu" key={i} to={menu.path}>
            {menu.name}
          </Link>
        )
      })}
    </nav>
  )
}
