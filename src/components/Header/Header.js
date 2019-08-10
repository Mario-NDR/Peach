import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, Icon, Dropdown } from 'antd'
// import { Link } from 'react-router-dom'
import { IntlComponent } from 'Components/Common'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from 'Containers/Login/actions'
// import ModifyPassword from 'Containers/User/ModifyPassword'

import LocaleSelector from './LocaleSelector'
import style from './style.scss'

class Header extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  menu = () => (
    <Menu>
      <Menu.Item key="password" onClick={this.updatePassword}><Icon type="key" /> {this.localeMessage('modifyPassword')} </Menu.Item>
      <Menu.Item key="logout" onClick={this.logout}><Icon type="poweroff" /> {this.localeMessage('logout')}</Menu.Item>
    </Menu>
  )

  logout = () => {
    this.props.logout()
  }

  render() {
    // const { userInfo } = this.props
    return (
      <React.Fragment>
        <section className={style.header}>
          <div />
          <div className={style.headerActions}>
            <LocaleSelector />
            <Dropdown overlay={this.menu()}>
              <div className={style.userWrapper}>
                <Icon className={style.userIcon} type="user" />
                <span className={style.username}>admin</span>
              </div>
            </Dropdown>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

// function mapStateToProps(state) {
//   return {
//     updateTime: state.user.updateTime,
//   }
// }

export default connect(null, mapDispatchToProps)(Header)
