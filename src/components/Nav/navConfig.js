import React from 'react'
import { Icon } from 'antd'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'overview',
    title: (
      <span>
        <Icon type="home" />
        <FormattedMessage id="overview" />
      </span>
    ),
    linkTo: '/app/overview',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'taskManage',
    title: (
      <span>
        <Icon type="appstore-o" />
        <FormattedMessage id="taskManage" />
      </span>
    ),
    menus: [
      { title: 'createTask', linkTo: '/app/task/create', permissions: [ 'admin', 'user' ] },
      { title: 'taskList', linkTo: '/app/task/list', permissions: [ 'admin', 'user' ] },
    ],
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'user',
    title: (
      <span>
        <Icon type="user" />
        <FormattedMessage id="userManage" />
      </span>
    ),
    linkTo: '/app/user',
    permissions: [ 'admin' ],
  },
  {
    name: 'logManage',
    title: (
      <span>
        <Icon type="file" />
        <FormattedMessage id="logManage" />
      </span>
    ),
    linkTo: '/app/log',
    permissions: [ 'admin' ],
  },
  {
    name: 'systemConfig',
    title: (
      <span>
        <Icon type="setting" />
        <FormattedMessage id="systemConfig" />
      </span>
    ),
    menus: [
      { title: 'systemUpgrade', linkTo: '/app/system/upgrade', permissions: [ 'admin', 'user' ] },
      { title: 'authorizationManage', linkTo: '/app/system/authorization', permissions: [ 'admin' ] },
    ],
    permissions: [ 'admin', 'user' ],
  },
]
