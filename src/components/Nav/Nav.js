/**
 * @summary 导航
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Menu } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import navNodes from './navConfig'
import style from './style.scss'

const { SubMenu } = Menu
const defaultOpenKeys = navNodes.map(navNode => navNode.name)

// const Logo = () => <div className={style.logo} />

class Nav extends React.Component {
  static propTypes = {
    // role: PropTypes.any,
    // roleResources: PropTypes.object,
    // loadRoleResources: PropTypes.func,
    collapsed: PropTypes.bool.isRequired,
    location: PropTypes.object,
  }

  static defaultProps = {
    // role: null,
    // roleResources: {},
    // loadRoleResources: null,
    location: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      current: this.pathRoute(location.pathname)
    }
  }

  componentWillReceiveProps() {
    if (this.pathRoute(location.pathname) !== this.state.current) {
      this.setState({
        current: this.pathRoute(location.pathname)
      })
    }
  }

  pathRoute = params => {
    return params
      .split('/')
      .slice(0, 4)
      .join('/')
  }

  localeTitle = menuConfig => {
    return {
      ...menuConfig,
      title: <FormattedMessage id={menuConfig.title} />
    }
  }

  menuAccessAllowed = menuConfig => {
    const { role } = []
    const { permissions } = menuConfig
    return permissions.includes(role)
  }

  renderMenuItem = menuConfig => {
    // const { role } = []
    // const { permissions } = menuConfig
    // if (permissions && _.isArray(permissions) && !permissions.includes(role)) {
    //   return null
    // }
    return (
      <Menu.Item key={this.pathRoute(menuConfig.linkTo)}>
        <Link to={menuConfig.linkTo}>{ menuConfig.title }</Link>
      </Menu.Item>
    )
  }

  renderSubMenu = sectionConfig => {
    return (
      <SubMenu key={sectionConfig.name} title={sectionConfig.title}>
        {
          sectionConfig.menus
            // .filter(this.menuAccessAllowed)
            .map(this.localeTitle)
            .map(this.renderMenuItem)
        }
      </SubMenu>
    )
  }

  renderNavNode = navNode => {
    if (navNode.menus) {
      return this.renderSubMenu(navNode)
    }
    return this.renderMenuItem(navNode)
  }

  render() {
    const { current } = this.state
    return (
      <div className={style.wrapperNav}>
        {/* <Logo /> */}
        <Menu
          mode="inline"
          selectedKeys={[ current ]}
          defaultOpenKeys={defaultOpenKeys}
          inlineCollapsed={this.props.collapsed}
        >
          { navNodes.map(this.renderNavNode) }
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.routing.location,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
