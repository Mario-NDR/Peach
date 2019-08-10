/**
 * @summary 加载中
 */
import React from 'react'
import { Spin } from 'antd'

import style from './style.scss'

class Spinging extends React.Component {

  render() {
    return (
      <Spin tip="加载中...">
        <div className={style.box} />
      </Spin>
    )
  }
}

export default Spinging
