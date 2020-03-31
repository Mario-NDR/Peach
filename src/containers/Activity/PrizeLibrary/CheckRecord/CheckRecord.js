/**
 * @summary 规则管理
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Table, Button, Input } from 'antd'

import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import ContentBox from 'Components/ContentBox'
import { IntlComponent } from 'Components/Common'
import columns from './config'

import * as actions from '../action'
import style from './style.scss'


class CheckRecord extends IntlComponent {

  static propTypes = {
    // form: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  componentDidMount() {
    this.props.actions.getRules({ server: 'client' })
  }

  handleChangeInput = (e) => {
    console.log(e)
  }

  render() {
    const { rules } = this.props

    return (
      <div className={style.CheckRecord}>
        <div className={style.viewRecord}>
          <Bread
            items={[
              { content: '规则管理' },
              { content: '已应用规则' },
            ]}
          />
          <ContentBox>
            <Subheader>客户端已应用规则</Subheader>
            <div className={style.search}>
              <div>
                关键字搜索：
              <Input
                style={{ width: 250 }}
                placeholder="输入规则关键字，支持模糊搜索"
                onChange={this.handleChangeInput}
              />
              </div>
              <div>
                <Button type="primary">查询</Button>
                <Button style={{ marginLeft: 15 }}>重置</Button>
              </div>
            </div>
          </ContentBox>
        </div>
        <ContentBox>
          <div className={style.operation} align="right">
            <Button size="large" onClick={() => { window.history.go(-1) }}>返回</Button>
            <Button size="large" type="primary" onClick={this.showModal}>修改应用策略</Button>
          </div>
          <div className={style.prizeTable}>
            <Table
              bordered
              columns={columns}
              dataSource={rules}
              rowKey={(r) => r.sid}
            />
          </div>
        </ContentBox>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rulesReducer.rules,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRecord)
