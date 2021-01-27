import styles from './Logo.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  const [isMouseEnter, setMouseEnter] = useState(false)

  return (
    <nav
      className={styles.Logo}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onTouchStart={() => setMouseEnter(true)}
      onTouchEnd={() => setMouseEnter(false)}
    >
      <Link href="/">
        <a className={styles.Logo__wrapper}>
          <Image
            className={classNames(styles.Logo__image, {
              [styles['Logo__image--hidden']]: isMouseEnter,
            })}
            src="/images/logo-en.png"
            alt="logo"
            width={434}
            height={153}
            layout="fixed"
          />
          <Image
            className={classNames(styles.Logo__image, {
              [styles['Logo__image--hidden']]: !isMouseEnter,
            })}
            src="/images/logo-kr.png"
            alt="logo"
            width={434}
            height={153}
            layout="fixed"
          />
        </a>
      </Link>
    </nav>
  )
}

export default React.memo(Logo)
