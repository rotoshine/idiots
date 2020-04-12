import './Layout.scss'

import React, { ReactNode } from 'react'

import Meta from './Meta'
import Logo from './Logo'
import Nav from './Nav'

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
    <>
      <a className="skip-link" href="#main">
        Skip to main
      </a>
      <main id="App" className="App">
        <Meta title={title} {...meta} />
        <header>
          <Logo />
          <Nav />
        </header>
        <section className={className}>{children}</section>
      </main>
    </>
  )
}

export default Layout
