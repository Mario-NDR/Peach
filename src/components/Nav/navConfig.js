import React from 'react'
import { Icon } from 'antd'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'home',
    title: (
      <span>
        <Icon type="home" />
        <FormattedMessage id="home" />
      </span>
    ),
    linkTo: '/app/map',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'attackDetails',
    title: (
      <span>
        <Icon type="appstore-o" />
        <FormattedMessage id="attackDetails" />
      </span>
    ),
    menus: [
      { title: 'overview', linkTo: '/app/activity/overview', permissions: [ 'admin', 'user' ] },
      { title: 'antivityCreate', linkTo: '/app/activity/create', permissions: [ 'admin', 'user' ] },
      { title: 'myActivity', linkTo: '/app/activity/mime', permissions: [ 'admin', 'user' ] },
      { title: 'prizeLibraryMange', linkTo: '/app/activity/prizeLibrary', permissions: [ 'admin', 'user' ] },
      { title: 'activityApprove', linkTo: '/app/activity/approve', permissions: [ 'admin', 'user' ] },
      { title: 'activitySettings', linkTo: '/app/activity/settings', permissions: [ 'admin', 'user' ] },
    ],
    permissions: [ 'admin', 'user' ],
  },
]
