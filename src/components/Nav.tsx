import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import './Nav.scss'

const menus = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'live',
    path: '/live'
  },
  {
    name: 'discography',
    path: '/discography'
  },
  {
    name: 'photos',
    path: '/photos'
  },
  {
    name: 'movies',
    path: '/movies'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]
const Nav = () => (
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

export default Nav