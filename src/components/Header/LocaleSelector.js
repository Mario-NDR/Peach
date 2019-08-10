/**
 * Created by g7tianyi on 2018/4/24
 */

import React from 'react'
import { Select } from 'antd'
import { IntlComponent } from 'Components/Common'

import style from './style.scss'

const selectStyle = {
  width: 120,
  marginRight: 10,
}

class LocaleSelector extends IntlComponent {

  constructor(props, context) {
    super(props, context)

    this.handleLocaleChange = this.handleLocaleChange.bind(this)
  }

  handleLocaleChange(value) {
    localStorage.setItem('locale', value)
    window.location.reload()
  }

  render() {
    const initLocale = localStorage.getItem('locale') || 'zh'
    return (
      <div className={style.headerItem}>
        <Select
          style={selectStyle}
          defaultValue={initLocale}
          onChange={this.handleLocaleChange}
        >
          <Select.Option key="zh">简体中文</Select.Option>
          <Select.Option key="en">English</Select.Option>
        </Select>
      </div>
    )
  }
}

export default LocaleSelector
