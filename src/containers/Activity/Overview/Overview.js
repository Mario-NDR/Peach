/**
 * @summary 概况
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

import Home from './Home'

class Overview extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.overview}>
        <Home />
      </div>
    )
  }
}

export default Overview
