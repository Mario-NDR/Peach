/**
 * @summary 竞猜活动
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import Error from 'Containers/Error'

import Content from './Content'
import Prize from './Prize'
import Approve from './Approve'

import style from './style.scss'

class Quiz extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.quiz}>
        <Switch>
          <Route path="/app/activity/create/quiz" component={Content} exact />
          <Route path="/app/activity/create/quiz/prize" component={Prize} exact />
          <Route path="/app/activity/create/quiz/approve" component={Approve} exact />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default Quiz
