import './Logo.scss'

import React from 'react'
import { Link } from 'gatsby'

const Logo = () => (
  <div className="Logo">
    <Link to="/">
      <img className="Logo__image" src="/images/logo.png" alt="logo" />
    </Link>
  </div>
)

export default Logo
