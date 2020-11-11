/**
 * @summary 规则管理
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import AllRules from './AllRules'
import ClientRules from './ClientRules'

class PrizeLibrary extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/prizeLibrary" component={AllRules} exact />
        <Route path="/app/activity/prizeRecord" component={ClientRules} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default PrizeLibrary
