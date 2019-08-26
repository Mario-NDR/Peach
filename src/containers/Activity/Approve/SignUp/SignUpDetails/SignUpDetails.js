/**
 * @summary 报名详情
 */
import React from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import { Divider, Tag, Icon, Menu } from 'antd'

import { IntlComponent } from 'Components/Common'
import Bread from 'Components/Bread'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'

import Detail from './Detail'
import SignUpNumber from './SignUpNumber'
import LeaveMessage from './LeaveMessage'

import img from './images/img.png'

import style from './style.scss'

const { Item } = Menu

class SignUpDetails extends IntlComponent {

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
            { content: '社区活动之免费洗车' },
          ]}
        />
        <ContentBox>
          <Subheader>活动详情：社区活动之免费洗车</Subheader>
          <Divider />
          <div className={style.title}>
            <div className={style.left}>
              <div className={style.imgBox}><img src={img} alt="" /></div>
              <div>
                <div className={style.title}>社区活动之免费洗车<Tag color="green">未开始</Tag></div>
                <div className={style.time}><Icon type="clock-circle" /> 今天14：50 至 17：30</div>
                <div className={style.time}><Icon type="environment" /> 大连市金州区十里黄金海岸</div>
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
          <Menu defaultSelectedKeys={[ 'detail' ]} onChange={this.handleTabChange} mode="horizontal">
            <Item key="detail">
              <Link to="/app/activity/approve/signUp/details">活动详情</Link>
            </Item>
            <Item key="signUpNumber">
              <Link to="/app/activity/approve/signUp/details/signUpNumber">报名人数（10）</Link>
            </Item>
            <Item key="leaveMessage">
              <Link to="/app/activity/approve/signUp/details/leaveMessage">留言（20）</Link>
            </Item>
          </Menu>
          <Switch>
            <Route path="/app/activity/approve/signUp/details" component={Detail} exact />
            <Route path="/app/activity/approve/signUp/details/signUpNumber" component={SignUpNumber} />
            <Route path="/app/activity/approve/signUp/details/leaveMessage" component={LeaveMessage} />
          </Switch>
        </ContentBox>
      </div>
    )
  }
}

export default SignUpDetails
