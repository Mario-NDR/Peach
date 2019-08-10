import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createRoutes from './routes'

export const history = createHistory()

const routes = createRoutes()

export default class Main extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map(r => (
            <Route key={r.path || Math.random()} {...r} />
          ))}
        </Switch>
      </ConnectedRouter>
    )
  }
}
