/**
 * 403 页面
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { logout } from 'Containers/Session/actions'

import style from './style.scss'

class Forbidden extends React.Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  static contextTypes = {
    intl: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
  }

  // localeMessage = (key, args) => {
  //   if (this.context.intl && this.context.intl.formatMessage) {
  //     return this.context.intl.formatMessage({ id: key }, args)
  //   }
  //   return ''
  // }

  // logout = () => {
  //   this.props.logout()
  //   this.context.router.history.push('/login')
  // }

  render() {
    return (
      <div className={style.wrapper}>
        <img src="https://s0.easeglass.com/static/403.gif" alt="403" />
        { /* <p> { this.localeMessage('forbbidenPage') } </p> */ }
        <Button onClick={this.logout}>{ this.localeMessage('sessionTryLoginAgain') }</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(null, mapDispatchToProps)(Forbidden)
