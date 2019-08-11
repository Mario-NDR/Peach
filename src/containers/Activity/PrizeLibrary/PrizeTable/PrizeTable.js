/**
 * @jinghh 奖品库管理
 */
import React from 'react'
import { Table, Pagination } from 'antd'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'

import style from './style.scss'

class PrizeTable extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      title: '奖品编号',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    {
      title: '奖品名称',
      dataIndex: 'namePrize',
      key: 'namePrize',
    },
    {
      title: '奖品类型',
      dataIndex: 'typePrize',
      key: 'typePrize',
    },
    {
      title: '奖品单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '奖品库存',
      dataIndex: 'inventory',
      key: 'inventory',
    },
    {
      title: '奖品发放记录',
      dataIndex: 'record',
      key: 'record',
      render: () => {
        return (
          <a role="button" href="#">查看发放记录</a>
        )
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <div>
            <a role="button" href="#">编辑</a>
            <a role="button" href="#" style={{ marginLeft: 10 }}>删除</a>
          </div>
        )
      }
    },
  ]

  dataSource = [
    {
      serialNumber: 'gt001',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    {
      serialNumber: 'gt002',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    {
      serialNumber: 'gt003',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    {
      serialNumber: 'gt004',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    {
      serialNumber: 'gt005',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    {
      serialNumber: 'gt006',
      namePrize: '积分',
      typePrize: '虚拟奖品',
      price: '0.01',
      inventory: '无限制',
    },
    
  ]

  render() {
    return (
      <ContentBox>
      <div className={style.prizeTable}>
        <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={false} />
        <div align="right">
          <Pagination size="small" style={{ marginTop: 15 }} total={50} showSizeChanger showQuickJumper />
        </div>
      </div>
      </ContentBox>
    )
  }
}

export default PrizeTable
