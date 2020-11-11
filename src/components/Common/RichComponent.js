import React from 'react'
import PropTypes from 'prop-types'
import { notification } from 'antd'
import network from 'Utils/network'

import IntlComponent from './IntlComponent'

class RichComponent extends IntlComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props, context) {
    super(props, context)

    this.goBack = this.goBack.bind(this)
    this.redirectTo = this.redirectTo.bind(this)

    this.getData = this.getData.bind(this)
    this.putData = this.putData.bind(this)
    this.postData = this.postData.bind(this)
    this.deleteData = this.deleteData.bind(this)

    this.notifySuccess = this.notifySuccess.bind(this)

    this.richProps = {
      getData: this.getData,
      putData: this.putData,
      postData: this.postData,
      deleteData: this.deleteData,
      redirectTo: this.redirectTo,
    }
  }

  // ////////////////////////////////////////////////////////////////////////////////

  goBack() {
    this.context.router.history.goBack()
  }

  redirectTo(url) {
    if (url) {
      this.context.router.history.push(url)
    }
  }

  // ////////////////////////////////////////////////////////////////////////////////

  notifySuccess() {
    const that = this
    notification.success({
      message: that.localeMessage('operationSucceed')
    })
  }

  // ////////////////////////////////////////////////////////////////////////////////

  getData(url, params = null, onComplete = null, onError = null) {
    return this.request('GET', url, params, onComplete, onError, false)
  }

  putData(url, payload, onComplete = null, onError = null, notifyComplete = true) {
    return this.request('PUT', url, payload, onComplete, onError, notifyComplete)
  }

  postData(url, payload, onComplete = null, onError = null, notifyComplete = true) {
    return this.request('POST', url, payload, onComplete, onError, notifyComplete)
  }

  deleteData(url, payload, onComplete = null, onError = null, notifyComplete = true) {
    return this.request('DELETE', url, payload, onComplete, onError, notifyComplete)
  }

  request(method, url, payload, onComplete, onError, notifyComplete = true) {
    let promise
    if (method === 'GET') {
      promise = network.GET(url, payload)
    } else if (method === 'PUT') {
      promise = network.PUT(url, payload)
    } else if (method === 'POST') {
      promise = network.POST(url, payload)
    } else {
      promise = network.DELETE(url, payload)
    }

    const that = this
    return promise
      .then(response => {
        if (notifyComplete) {
          that.notifySuccess()
        }
        if (onComplete) {
          onComplete(response)
        }
        return response
      })
      .catch((error) => {
        if (onError) {
          onError(error)
        }
      })
  }

  // ////////////////////////////////////////////////////////////////////////////////

  render() {
    if (this.props.children) {
      return React.cloneElement(this.props.children, this.richProps)
    }
    return null
  }
}

export default RichComponent
