/**
 * @summary 概况
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Overview extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.overview}>
        Overview
      </div>
    )
  }
}

export default Overview
