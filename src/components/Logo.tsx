import './Logo.scss'

import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, useStaticQuery, graphql } from 'gatsby'

function Logo() {
  const [isMouseEnter, setMouseEnter] = useState(false)
  const data = useStaticQuery<GatsbyTypes.LogoStaticQuery>(graphql`
    query LogoStatic {
      defaultLogo: file(relativePath: { eq: "logo_simple.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      logo: file(relativePath: { eq: "logo_color.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
  `)
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
          src={data?.defaultLogo?.childImageSharp?.fluid?.src}
          alt="logo"
        />
        <img
          className={classNames('Logo__image', {
            'Logo__image--hidden': !isMouseEnter,
          })}
          src={data?.logo?.childImageSharp?.fluid?.src}
          alt="logo"
        />
      </Link>
    </nav>
  )
}

export default React.memo(Logo)
