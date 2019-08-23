/**
 * @summary 投票详情
 */
import React from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import { Divider, Tag, Icon, Menu } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import Detail from './Detail'
import VotingData from './VotingData'

import img from './images/img.png'

import style from './style.scss'

const { Item } = Menu

class VotingDetails extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.details}>
        <Bread
          items={[
            { content: '活动' },
            { content: '活动审批' },
            { content: '活动详情' },
            { content: '最美同事评选' },
          ]}
        />
        <ContentBox>
          <Subheader>活动详情：最美同事评选</Subheader>
          <Divider />
        </ContentBox>
        <ContentBox>
          <div className={style.title}>
            <div className={style.left}>
              <div className={style.imgBox}><img src={img} alt="" /></div>
              <div>
                <div className={style.title}>最美同事评选<Tag color="green">未开始</Tag></div>
                <div>2019-03-27 15:49 至 2019-04-03 15：49</div>
                <div className={style.time}><Icon type="user" /> 罗晓星</div>
                <div className={style.time}>最后更新于 2019-03-26 19:20:24</div>
              </div>
            </div>
            <div className={style.right}>
              <a role="button" className={style.operation}><Icon type="edit" theme="twoTone" /> 编辑</a>
              <a role="button" className={style.operation}><Icon type="delete" theme="twoTone" /> 删除</a>
              <a role="button" className={style.operation}><Icon type="diff" theme="twoTone" /> 复制</a>
              <a role="button" className={style.operation}><Icon type="share-alt" /> 分享</a>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          <Menu defaultSelectedKeys={[ 'detail' ]} onChange={this.handleTabChange} mode="horizontal">
            <Item key="detail">
              <Link to="/app/activity/approve/vote/details">活动详情</Link>
            </Item>
            <Item key="data">
              <Link to="/app/activity/approve/vote/details/data">活动数据</Link>
            </Item>
          </Menu>
          <Switch>
            <Route path="/app/activity/approve/vote/details" component={Detail} exact />
            <Route path="/app/activity/approve/vote/details/data" component={VotingData} />
          </Switch>
        </ContentBox>
      </div>
    )
  }
}

export default VotingDetails
