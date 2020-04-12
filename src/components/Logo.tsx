import './Logo.scss'

import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

function Logo() {
  const [isMouseEnter, setMouseEnter] = useState(false)
  return (
    <nav className="Logo">
      <Link
        className="Logo__wrapper"
        to="/"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onTouchStart={() => setMouseEnter(true)}
        onTouchEnd={() => setMouseEnter(false)}
      >
        <img
          className={classNames('Logo__image', {
            'Logo__image--hidden': isMouseEnter,
          })}
          src="/images/logo_simple.png"
          alt="logo"
        />
        <img
          className={classNames('Logo__image', {
            'Logo__image--hidden': !isMouseEnter,
          })}
          src="/images/logo_color.png"
          alt="logo"
        />
      </Link>
    </nav>
  )
}

export default React.memo(Logo)
