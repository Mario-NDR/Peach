/**
 * @summary 数据可视化
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'

import AboutConfig from './AboutConfig'

class Visualization extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/app/about" component={AboutConfig} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Visualization
