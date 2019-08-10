/**
 * Created by g7tianyi on 2018/5/18
 */

import React from 'react'
import PropTypes from 'prop-types'

class IntlComponent extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  static contextTypes = {
    intl: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)

    this.localeMessage = this.localeMessage.bind(this)

    this.intlProps = {
      localeMessage: this.localeMessage
    }
  }

  localeMessage(key, args) {
    if (this.context.intl && this.context.intl.formatMessage && key) {
      return this.context.intl.formatMessage({ id: key }, args)
    }
    return ''
  }

  render() {
    if (this.props.children) {
      return React.cloneElement(this.props.children, this.intlProps)
    }
    return null
  }
}

export default IntlComponent
