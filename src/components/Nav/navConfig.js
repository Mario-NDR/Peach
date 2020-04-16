import React from 'react'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'situationalAwareness',
    title: (
      <span>
        <FormattedMessage id="situationalAwareness" />
      </span>
    ),
    linkTo: '/app/map',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'visualization',
    title: (
      <span>
        <FormattedMessage id="visualization" />
      </span>
    ),
    linkTo: '/app/visualization',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'overview',
    title: (
      <span>
        <FormattedMessage id="overview" />
      </span>
    ),
    linkTo: '/app/activity/overview',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'attackDetails',
    title: (
      <span>
        <FormattedMessage id="attackDetails" />
      </span>
    ),
    menus: [
      { title: 'allRules', linkTo: '/app/activity/prizeLibrary', permissions: [ 'admin', 'user' ] },
      { title: 'clientRules', linkTo: '/app/activity/prizeRecord', permissions: [ 'admin', 'user' ] },
    ],
  },
  {
    name: 'systemConfig',
    title: (
      <span>
        <FormattedMessage id="systemConfig" />
      </span>
    ),
    linkTo: '/app/setting',
    permissions: [ 'admin', 'user' ],
  },
]
