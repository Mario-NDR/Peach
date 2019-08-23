/**
 * @summary 报名详情--留言
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class LeaveMessage extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.leaveMessage}>
        LeaveMessage
      </div>
    )
  }
}

export default LeaveMessage
