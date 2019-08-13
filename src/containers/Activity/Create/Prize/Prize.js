/**
 * @summary 抽奖活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Prize extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.prize}>
        Prize
      </div>
    )
  }
}

export default Prize
