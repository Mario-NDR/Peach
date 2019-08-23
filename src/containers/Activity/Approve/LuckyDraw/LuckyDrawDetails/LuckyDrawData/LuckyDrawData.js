/**
 * @summary 抽奖详情--活动数据
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class LuckyDrawData extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.luckyDrawData}>
        LuckyDrawData
      </div>
    )
  }
}

export default LuckyDrawData
