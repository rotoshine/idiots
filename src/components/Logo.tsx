import './Logo.scss'

import React from 'react'
import { Link } from 'gatsby'

const Logo = () => (
  <div className="Logo">
    <Link to="/">
      <div className="Logo__text">
        <span>i</span>
        <span>d</span>
        <span>i</span>
        <span>o</span>
        <span>t</span>
        <span>s</span>
      </div>
    </Link>
  </div>
)

export default Logo
