/**
 * @summary 抽奖详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class LuckyDrawDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        LuckyDraw-Details
      </div>
    )
  }
}

export default LuckyDrawDetails
