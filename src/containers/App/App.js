import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Header from 'Components/Header'
import Nav from 'Components/Nav'
import Home from 'Containers/Home'
import Activity from 'Containers/Activity'
import Error from 'Containers/Error'

import style from './style.scss'

const { Header: LayoutHeader, Sider: LayoutSider, Content: LayoutContent } = Layout

const AppHeader = () => (
  <LayoutHeader className={style.layoutHeader}>
    <Header />
  </LayoutHeader>
)

class App extends React.PureComponent {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      collapsed: false,
    }
  }

  onCollapse = collapsed => this.setState({ collapsed })

  render() {
    return (
      <Layout className={style.layoutWrapper}>
        <AppHeader />
        <Layout className={style.body}>
          <LayoutSider
            className={style.sider}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Nav />
          </LayoutSider>
          <LayoutContent className={style.content}>
            <Switch>
              <Route path="/app/home" component={Home} exact />
              <Route path="/app/activity" component={Activity} />
              <Route component={Error} />
            </Switch>
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
}

export default App
