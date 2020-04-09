/**
 * @summary 数据可视化
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import Visual from './Visual'

class Visualization extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/visualization" component={Visual} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Visualization
