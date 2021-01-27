import React, { ReactNode } from 'react'

import './Container.scss'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return <div className="Container">{children}</div>
}
