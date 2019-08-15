/**
 * 把根路由重定向到指定路由，比如登录
 */
import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Landing extends React.PureComponent {
  render() {
    const pathname = '/app/activity/overview'
    return <Redirect to={{ pathname }} />
  }
}
