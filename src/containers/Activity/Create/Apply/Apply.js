/**
 * @summary 报名活动
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Error from 'Containers/Error'

import Content from './Content'
import Prize from './Prize'
import Approve from './Approve'
// import style from './style.scss'

class Create extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/create/apply" component={Content} exact />
        <Route path="/app/activity/create/apply/prize" component={Prize} exact />
        <Route path="/app/activity/create/apply/approve" component={Approve} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Create
