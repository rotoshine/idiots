import React, { ReactNode } from 'react'

import './Container.scss'

interface Props {
  children: string | ReactNode,
}

export default ({ children }: Props) => (
  <div className="Container">
    {children}
  </div>
)