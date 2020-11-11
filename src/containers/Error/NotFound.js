/**
 * 404 页面
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Redirect } from 'react-router-dom'
import { Button } from 'antd'
import PropTypes from 'prop-types'

import style from './style.scss'

class NotFound extends React.Component {

  static contextTypes = {
    intl: PropTypes.object.isRequired,
  }

  localeMessage = (key, args) => {
    if (this.context.intl && this.context.intl.formatMessage) {
      return this.context.intl.formatMessage({ id: key }, args)
    }
    return ''
  }

  handleReturn = () => {
    window.history.back()
  }

  // render() {
  //   return <Redirect to={{ pathname: '/login' }} />
  // }

  render() {
    return (
      <div className={style.wrapper}>
        <img src="https://s0.easeglass.com/static/404.gif" alt="404" />
        <p>{ this.localeMessage('notFound') }</p>
        <Button onClick={this.handleReturn}>{ this.localeMessage('returnToPrevStep') }</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(null, mapDispatchToProps)(NotFound)
