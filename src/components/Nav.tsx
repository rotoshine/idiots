import './Nav.scss'

import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import classNames from 'classnames'
import { startsWith } from 'lodash'

const menus = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'goods',
    path: 'https://marpple.shop/kr/band_idiots',
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
    name: 'videos',
    path: '/videos',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

export default function Nav() {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false)

  const props = useSpring({
    to: {
      height: visibleMobileMenu ? 330 : 0,
    },
    from: {
      height: visibleMobileMenu ? 0 : 330,
    },
  })

  const renderMenus = () =>
    menus.map(menu =>
      startsWith(menu.path, 'http') ? (
        <a
          className="Nav__menu"
          key={menu.name}
          href={menu.path}
          target="_blank"
          rel="noopener norefferer"
        >
          {menu.name}
        </a>
      ) : (
        <Link className="Nav__menu" key={menu.name} to={menu.path}>
          {menu.name}
        </Link>
      )
    )

  return (
    <>
      <nav className="Nav">
        <button
          className="Nav__toggleMenu"
          onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
        >
          <i className="icon ion-ios-menu" />
        </button>

        <animated.div
          className={classNames('Nav__wrapper', {
            'Nav__wrapper--visible': visibleMobileMenu,
          })}
          style={props}
        >
          {renderMenus()}
        </animated.div>
      </nav>
    </>
  )
}
