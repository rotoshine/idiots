import classNames from 'classnames';
import React from 'react';
import './Panel.scss';


interface Props {
  title?: string,
  noBorder?: boolean,
  children: string | React.ReactNode,
}

const Panel = ({ title, noBorder = false, children }: Props) => (
  <div className={classNames('Panel', {
    'Panel__noBorder': noBorder,
  })}>
    <div className="PanelTitle">{title}</div>
    <div className="PanelContents">
      {children}
    </div>
  </div>
)

export default Panel
