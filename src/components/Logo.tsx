import './Logo.scss'

import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

function Logo() {
  const [isMouseEnter, setMouseEnter] = useState(false)
  return (
    <div className="Logo">
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
    </div>
  )
}

export default React.memo(Logo)
