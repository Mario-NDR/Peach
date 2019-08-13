/**
 * @summary 创建活动
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Error from 'Containers/Error'

import SelectType from './SelectType'
import Apply from './Apply'
import Prize from './Prize'
import Quiz from './Quiz'
import Vote from './Vote'
// import style from './style.scss'

class Create extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/create" component={SelectType} exact />
        <Route path="/app/activity/create/apply" component={Apply} exact />
        <Route path="/app/activity/create/prize" component={Prize} exact />
        <Route path="/app/activity/create/quiz" component={Quiz} exact />
        <Route path="/app/activity/create/vote" component={Vote} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Create
