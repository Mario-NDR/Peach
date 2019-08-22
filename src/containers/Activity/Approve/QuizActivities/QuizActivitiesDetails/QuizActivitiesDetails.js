/**
 * @summary 竞猜详情
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class QuizActivitiesDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        QuizActivities-Details
      </div>
    )
  }
}

export default QuizActivitiesDetails
