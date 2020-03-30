import React from 'react'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'home',
    title: (
      <span>
        {/* <img src="../../images/map.ico" alt="" style={{ width: '10%', marginRight: 10 }} /> */}
        <FormattedMessage id="home" />
      </span>
    ),
    linkTo: '/app/map',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'overview',
    title: (
      <span>
        {/* <img src="../../images/flow.ico" alt="" style={{ width: '10%', marginRight: 10 }} /> */}
        <FormattedMessage id="overview" />
      </span>
    ),
    linkTo: '/app/activity/overview',
    permissions: [ 'admin', 'user' ],
  },
  // {
  //   name: 'prizeLibraryMange',
  //   title: (
  //     <span>
  //       {/* <img src="../../images/rules.ico" alt="" style={{ width: '10%', marginRight: 10 }} /> */}
  //       <FormattedMessage id="prizeLibraryMange" />
  //     </span>
  //   ),
  //   linkTo: '/app/activity/prizeLibrary',
  //   permissions: [ 'admin', 'user' ],
  // },
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
  }
]
