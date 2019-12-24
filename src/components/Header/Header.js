import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Dropdown, message } from 'antd'
import { IntlComponent } from 'Components/Common'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { history } from 'Src/Main'

import { logout } from 'Containers/Login/actions'
// import ModifyPassword from 'Containers/User/ModifyPassword'
import Clock from '../Clock'

import LocaleSelector from './LocaleSelector'
import style from './style.scss'

class Header extends IntlComponent {

  static propTypes = {
    userName: PropTypes.string,
  }

  static defaultProps = {
    userName: '',
  }

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
    history.push('/login')
    message.success(this.localeMessage('logout'))
  }

  handleClickLogo = () => {
    history.push('/app/map')
  }

  render() {
    return (
      <React.Fragment>
        <section className={style.header}>
          <div className={style.logo}><Icon type="ant-cloud" style={{ fontSize: '28px', lineHeight: '60px' }} onClick={this.handleClickLogo} /> network Detection and Response</div>
          <div className={style.headerActions}>
            <div className={style.divClock}><Clock /></div>
            <LocaleSelector />
            <Dropdown overlay={this.menu()}>
              <div className={style.userWrapper}>
                <Icon className={style.userIcon} type="user" />
                <span className={style.username}>{ sessionStorage.getItem('userName') || '访客' }</span>
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

function mapStateToProps(state) {
  return {
    userName: state.loginReducer.userName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
