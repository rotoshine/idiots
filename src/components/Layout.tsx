import React, { ReactNode } from 'react'

import Meta from './Meta'
import Logo from './Logo'
import Nav from './Nav'

import './Layout.scss'

interface Props {
  title?: string
  meta?: any
  className?: string
  children: string | ReactNode
}

export const Layout = ({
  title,
  meta = {},
  className = '',
  children,
}: Props) => {
  return (
    <div className="App">
      <Meta title={title} {...meta} />
      <header>
        <Logo />
        <Nav />
      </header>
      <div className={className}>{children}</div>
    </div>
  )
}

export default Layout
