import React, { PureComponent } from 'react'
import classNames from 'classnames'

interface Props {
  className?: string,
}

interface State {
  scriptLoaded: boolean,
}

export default class TwitterTimeline extends PureComponent<Props, State> {
  state = {
    scriptLoaded: false
  }

  loadTwitterScript = () => {
    if (!this.state.scriptLoaded) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      
      script.onload = () => {
        this.setState({
          scriptLoaded: true
        })
      }
      document.querySelector('head')!.appendChild(script)
    }
  }

  componentDidMount() {
    this.loadTwitterScript()
  }

  render() {
    const { className } = this.props

    return (
      <div className={classNames('TwitterTimeline', className)}>
        <a className="twitter-timeline"
          href="https://twitter.com/band_idiots?ref_src=twsrc%5Etfw">Tweets by band_idiots</a>
      </div>
    )
  }
}