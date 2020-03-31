import React from 'react'
import { Tag, Popconfirm } from 'antd'
import style from './style.scss'

const columns = (confirm, cancel, confirmDel, cancelDel) => [
  {
    title: '规则编号',
    dataIndex: 'sid',
    key: 'sid',
    align: 'center',
    render: (text, record) => (
      <div className={style.tableText}>
        <Popconfirm
          title="确定删除吗?"
          onConfirm={() => confirmDel(record)}
          onCancel={() => cancelDel(record)}
          okText="删除"
          cancelText="取消"
        >
          <a role="button">{text}</a>
        </Popconfirm>
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
    title: '防御策略',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    render: (text, record) => (
      <div className={style.tableText}>
        <Popconfirm
          title={`确定修改防御策略为 - ${record.type === 'drop' ? '告警' : '拦截'}?`}
          onConfirm={() => confirm(record)}
          onCancel={() => cancel(record)}
          okText="确定"
          cancelText="取消"
        >
          <Tag color={text === 'alert' ? 'volcano' : 'green'}>
            {text === 'alert' ? '告警' : '拦截'}
          </Tag>
        </Popconfirm>
      </div>
    )
  },
  {
    title: '传输协议',
    dataIndex: 'content_type',
    key: 'content_type',
    align: 'center',
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
