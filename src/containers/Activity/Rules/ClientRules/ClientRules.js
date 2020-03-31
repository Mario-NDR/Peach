/**
 * @summary 规则策略 -- 防御策略
 */
import React from 'react'
import PropTypes from 'prop-types'
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


class ClientRules extends IntlComponent {

  static propTypes = {
    rules: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSearchRules = this.handleSearchRules.bind(this)
  }

  componentDidMount() {
    this.props.actions.getRules({ server: 'client' })
  }

  handleChangeInput = (e) => {
    this.setState({
      searchValue: e.target.value
    })
    if (e.target.value === '') {
      this.props.actions.getRules({ server: 'client' })
    }
  }

  // 查询
  handleSearchRules = () => {
    const { searchValue } = this.state
    this.props.actions.getRules({
      server: 'client',
      search: searchValue
    })
  }

  // 重置
  handleReset = () => {
    this.setState({ searchValue: '' })
    this.props.actions.getRules({ server: 'client' })
  }

  // 修改防御策略
  confirm = (record) => {
    console.info(record)
  }

  cancel = (record) => {
    console.info('cancel', record)
  }

  // 删除防御策略
  confirmDel = (record) => {
    console.info('del', record)
  }

  cancelDel = (record) => {
    console.info('delCancel', record)
  }

  render() {
    const { rules } = this.props
    const { searchValue } = this.state

    return (
      <div className={style.clientRules}>
        <div className={style.viewRecord}>
          <Bread
            items={[
              { content: '规则管理' },
              { content: '防御策略' },
            ]}
          />
          <ContentBox>
            <Subheader>防御策略</Subheader>
            <div className={style.search}>
              <div>
                搜索：
              <Input
                style={{ width: 250 }}
                allowClear
                placeholder="输入规则关键字，支持模糊搜索"
                value={searchValue}
                onChange={this.handleChangeInput}
              />
              </div>
              <div>
                <Button style={{ marginLeft: 15 }} type="primary" onClick={this.handleSearchRules}>查询</Button>
                <Button style={{ marginLeft: 15 }} onClick={this.handleReset}>重置</Button>
              </div>
            </div>
          </ContentBox>
        </div>
        <ContentBox>
          <div className={style.prizeTable}>
            <Table
              bordered
              columns={columns(this.confirm, this.cancel, this.confirmDel, this.cancelDel)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientRules)
