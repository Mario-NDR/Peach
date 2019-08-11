/**
 * @summary 奖品库管理
 */
import React from 'react'
import { Input, Button } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import ContentBox from 'Components/ContentBox'

import style from './style.scss'

import PrizeTable from './PrizeTable'

class PrizeLibrary extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.prizeLibrary}>
        <Bread
          items={[
            { content: '活动' },
            { content: '奖品库管理' },
          ]}
        />
        <ContentBox>
          <Subheader>奖品库管理</Subheader>
          <div className={style.search}>
            <div>
              奖品编号：
            <Input
              style={{ width: 250 }}
              placeholder="输入奖品编号"
            />
            </div>
            <div>
              奖品名称：
            <Input
              style={{ width: 250 }}
              placeholder="输入奖品名称，支持模糊搜索"
            />
            </div>
            <div>
              <Button type="primary">查询</Button>
              <Button style={{ marginLeft: 15 }}>重置</Button>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          {/* {this.props.children} */}
          <PrizeTable />
        </ContentBox>
      </div>
    )
  }
}

export default PrizeLibrary
