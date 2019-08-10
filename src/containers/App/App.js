import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Header from 'Components/Header'
import Nav from 'Components/Nav'
import Overview from 'Containers/Overview'
import Error from 'Containers/Error'

import style from './style.scss'

const { Header: LayoutHeader, Sider: LayoutSider, Content: LayoutContent } = Layout

const AppHeader = () => (
  <LayoutHeader className={style.layoutHeader}>
    <Header />
  </LayoutHeader>
)
const AppNav = () => (
  <LayoutSider className={style.sider}>
    <Nav />
  </LayoutSider>
)

class App extends React.PureComponent {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Layout className={style.layoutWrapper}>
        <AppNav />
        <Layout className={style.body}>
          <AppHeader />
          <LayoutContent className={style.content}>
            <Switch>
              <Route path="/app/overview" component={Overview} />
              <Route component={Error} />
            </Switch>
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
}

export default App
