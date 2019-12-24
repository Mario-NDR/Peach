/**
 * @summary 攻击流量（ip）
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
            { content: '攻击详情' },
            { content: '攻击流量（ip）' },
          ]}
        />
        <Home />
      </div>
    )
  }
}

export default Overview
