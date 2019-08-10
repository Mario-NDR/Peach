/**
 * @summary 奖品库管理
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class PrizeLibrary extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.prizeLibrary}>
        PrizeLibrary
      </div>
    )
  }
}

export default PrizeLibrary
