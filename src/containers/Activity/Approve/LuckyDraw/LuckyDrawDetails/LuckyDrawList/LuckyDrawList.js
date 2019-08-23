/**
 * @summary 抽奖详情--中奖名单
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class LuckyDrawList extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.luckyDrawList}>
        LuckyDrawList
      </div>
    )
  }
}

export default LuckyDrawList
