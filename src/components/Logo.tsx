import React from 'react'
import { Link } from 'gatsby'

import './Logo.scss'

const Logo = () => (
  <div className="Logo">
    <Link to="/">
      <div className="Logo__text">idiots</div>
    </Link>
  </div>
)

export default Logo