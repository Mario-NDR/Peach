/**
 * @summary 活动通用设置
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Settings extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.settings}>
        Settings
      </div>
    )
  }
}

export default Settings
