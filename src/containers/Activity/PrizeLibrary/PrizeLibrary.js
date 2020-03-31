/**
 * @summary 规则管理
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import PrizeTable from './PrizeTable'
import CheckRecord from './CheckRecord'

class PrizeLibrary extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/prizeLibrary" component={PrizeTable} exact />
        <Route path="/app/activity/prizeLibrary/prizeRecord" component={CheckRecord} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default PrizeLibrary
