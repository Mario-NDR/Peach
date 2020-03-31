import React from 'react'
import { Tag } from 'antd'

import style from './style.scss'

const columns = [
  {
    title: '规则编号',
    dataIndex: 'sid',
    key: 'sid',
    align: 'center',
    width: '10%',
    render: (text) => (
      <div className={style.tableText}>
        {text}
      </div>
    )
  },
  {
    title: '规则信息',
    dataIndex: 'msg',
    key: 'msg',
    align: 'center',
    render: (text) => (
      <div className={style.tableText}>
        {text}
      </div>
    )
  },
  {
    title: '传输协议',
    dataIndex: 'content_type',
    key: 'content_type',
    align: 'center',
    width: '8%',
    render: (text) => (
      <Tag color="geekblue">
        {text}
      </Tag>
    )
  },

  {
    title: '漏洞类型',
    dataIndex: 'class_type',
    key: 'class_type',
    align: 'center',
    width: '8%',
    render: (text) => {
      switch (text) {
        case '木马活动':
          return (<Tag color="red">{text}</Tag>)
        case '网络扫描':
          return (<Tag color="lime">{text}</Tag>)
        default:
          return (<Tag color="orange">{text}</Tag>)
      }
    }
  },
]

export default columns
