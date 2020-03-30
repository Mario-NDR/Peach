/**
 * @summary 时钟组件
 */
import React from 'react'
// import { Icon } from 'antd'

import { IntlComponent } from 'Components/Common'
import { zeroPad } from 'Utils/number'

import style from './style.scss'

class Clock extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      h: 0,
      m: 0,
      s: 0,
    }
    this.timer = null
  }

  componentWillMount() {
    this.getTime()
  }

  componentDidMount() {
    this.timer = setInterval(this.getTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }
  

  getTime = () => {
    const h = new Date().getHours()
    const m = new Date().getMinutes()
    const s = new Date().getSeconds()
    this.setState({ h, m, s })
  }

  render() {
    const { h, m, s } = this.state
    return (
      <div className={style.clock}>
        <span>{ zeroPad(h) }</span>
        <span>:</span>
        <span>{ zeroPad(m) }</span>
        <span>:</span>
        <span>{ zeroPad(s) }</span>
      </div>
    )
  }
}

export default Clock
