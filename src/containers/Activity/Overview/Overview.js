/**
 * @summary 概况
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'

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
        <Bread
          items={[
            { content: '活动' },
            { content: '概况' },
          ]}
        />
        <Home />
      </div>
    )
  }
}

export default Overview
