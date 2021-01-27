import styles from './Panel.module.scss'

import classNames from 'classnames'
import React from 'react'

interface Props {
  title?: string
  style?: object
  noBorder?: boolean
  children: React.ReactNode
}

export default function Panel({
  title,
  style = {},
  noBorder = false,
  children,
}: Props) {
  return (
    <div
      style={style}
      className={classNames(styles.Panel, {
        [styles['Panel__noBorder']]: noBorder,
      })}
    >
      <div
        className={classNames(styles.PanelTitle, {
          [styles['PanelTitle--notitle']]: !title,
        })}
      >
        {title}
      </div>
      <div className={styles.PanelContents}>{children}</div>
    </div>
  )
}
