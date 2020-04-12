import classNames from 'classnames'
import React from 'react'
import './Panel.scss'

interface Props {
  title?: string
  noBorder?: boolean
  children: React.ReactNode
}

const Panel = ({ title, noBorder = false, children }: Props) => (
  <div
    className={classNames('Panel', {
      Panel__noBorder: noBorder,
    })}
  >
    <div
      className={classNames('PanelTitle', {
        'PanelTitle--notitle': !title,
      })}
    >
      {title}
    </div>
    <div className="PanelContents">{children}</div>
  </div>
)

export default Panel
