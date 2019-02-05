import React from 'react'

import './Panel.scss'

interface Props {
  title: string,
  children: string | React.ReactNode,
}

const Panel = ({ title, children }: Props) => (
  <div className="Panel">
    <div className="PanelTitle">{title}</div>
    <div className="PanelContents">
      {children}
    </div>
  </div>
)

export default Panel
