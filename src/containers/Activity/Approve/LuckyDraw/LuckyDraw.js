/**
 * @summary 抽奖活动
 */
import React from 'react'
import { Radio, Input, Button, Icon, Pagination } from 'antd'
import classnames from 'classnames'

import { IntlComponent } from 'Components/Common'

import Item from './Item'
import style from './style.scss'

const { Search } = Input

class LuckyDraw extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.signUp}>
        <div className={classnames('spaceBetween')}>
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">全部</Radio.Button>
            <Radio.Button value="b">未开始</Radio.Button>
            <Radio.Button value="c">进行中</Radio.Button>
            <Radio.Button value="d">已暂停</Radio.Button>
            <Radio.Button value="e">待审批</Radio.Button>
            <Radio.Button value="f">已结束</Radio.Button>
          </Radio.Group>
          <div>
            <Search
              style={{ width: 300 }}
              placeholder="请输入活动名称"
              enterButton="搜索"
              onSearch={value => console.log(value)}
            />
            <Button type="primary" className="ml16"><Icon type="plus" />创建活动</Button>
          </div>
        </div>
        <div className={style.main}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className={style.pageBox}><Pagination total={56} /></div>
      </div>
    )
  }
}

export default LuckyDraw
