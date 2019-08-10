/**
 * @summary 我的活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Mine extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.mine}>
        Mine
      </div>
    )
  }
}

export default Mine
