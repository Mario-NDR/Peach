/**
 * @summary 活动创建
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Create extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.create}>
        Create
      </div>
    )
  }
}

export default Create
