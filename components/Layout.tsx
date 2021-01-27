import styles from './Layout.module.scss'

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

export default function Layout({
  title,
  meta = {},
  className = '',
  children,
}: Props) {
  return (
    <>
      <a className={styles['skip-link']} href="#main">
        Skip to main
      </a>
      <main id="App" className={styles.App}>
        <Meta title={title} {...meta} />
        <header className={styles.header}>
          <Logo />
          <Nav />
        </header>
        <section className={className}>{children}</section>
      </main>
    </>
  )
}
