/**
 * @summary 竞猜活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Quiz extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.quiz}>
        Quiz
      </div>
    )
  }
}

export default Quiz
