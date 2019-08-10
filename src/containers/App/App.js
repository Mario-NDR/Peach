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
        <LayoutSider
          className={style.sider}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Nav />
        </LayoutSider>
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
