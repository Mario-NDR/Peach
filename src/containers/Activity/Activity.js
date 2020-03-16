/**
 * @summary 活动管理
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Error from 'Containers/Error'

import Overview from './Overview'
import PrizeLibrary from './PrizeLibrary'

class Activity extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/overview" component={Overview} exact />
        <Route path="/app/activity/prizeLibrary" component={PrizeLibrary} />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Activity
