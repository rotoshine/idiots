import styles from './Container.module.scss'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return <div className={styles.Container}>{children}</div>
}
