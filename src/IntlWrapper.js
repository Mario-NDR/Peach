import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

import enUS from './locale/en'
import zhCN from './locale/zh'

addLocaleData([ ...en, ...zh ])
const intlLocales = {
  zh: zhCN,
  en: enUS,
}
const userLocale = localStorage.getItem('locale') || 'zh'

const IntlWrapper = ({ children }) => (
  <IntlProvider locale="en" messages={intlLocales[userLocale]}>
    { children }
  </IntlProvider>
)
IntlWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IntlWrapper
