/**
 * @summary 抽奖详情--活动详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Detail extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.detail}>
        Detail
      </div>
    )
  }
}

export default Detail
