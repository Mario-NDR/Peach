import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, notification } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import enUS from 'antd/lib/locale-provider/en_US'
import moment from 'moment'

import IntlWrapper from './IntlWrapper'
import configureStore from './redux/store'
import Main, { history } from './Main'
import './styles/base.scss'
import './styles/custom.scss'

export const store = configureStore(history, {})

moment.locale('zh-cn')
const antdLocales = {
  zh: zhCN,
  en: enUS,
}
const userLocale = localStorage.getItem('locale') || 'zh'

notification.config({ duration: 3 })

render(
  <IntlWrapper>
    <ConfigProvider locale={antdLocales[userLocale] || zhCN}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ConfigProvider>
  </IntlWrapper>,
  document.querySelector('#root')
)
