/**
 * @summary 活动管理/审批
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Approve extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.approve}>
        Approve
      </div>
    )
  }
}

export default Approve
