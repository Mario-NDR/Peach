/**
 * @summary 报名活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Apply extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.apply}>
        Apply
      </div>
    )
  }
}

export default Apply
