/* eslint-disable global-require */
import React from 'react'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'situationalAwareness',
    title: (
      <span>
        <img border="0" src={require('../../images/map.png')} alt="" height="20" style={{ marginRight: 30 }} />
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
        <img border="0" src={require('../../images/visual.png')} alt="" height="20" style={{ marginRight: 30 }} />
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
        <img border="0" src={require('../../images/intrusion.png')} alt="" height="20" style={{ marginRight: 30 }} />
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
        <img border="0" src={require('../../images/rule.png')} alt="" height="20" style={{ marginRight: 30 }} />
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
        <img border="0" src={require('../../images/setting.png')} alt="" height="20" style={{ marginRight: 30 }} />
        <FormattedMessage id="systemConfig" />
      </span>
    ),
    linkTo: '/app/setting',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'about',
    title: (
      <span>
        <img border="0" src={require('../../images/about.png')} alt="" height="20" style={{ marginRight: 30 }} />
        <FormattedMessage id="about" />
      </span>
    ),
    linkTo: '/app/about',
    permissions: [ 'admin', 'user' ],
  },
]
