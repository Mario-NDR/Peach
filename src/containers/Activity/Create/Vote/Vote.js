/**
 * @summary 投票活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Vote extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.vote}>
        Vote
      </div>
    )
  }
}

export default Vote
