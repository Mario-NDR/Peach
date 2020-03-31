/**
 * @summary 规则策略 -- 全部规则
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Table, Button, Input, Message, Modal, Radio,
} from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import columns from './config'

import * as actions from '../action'
import style from './style.scss'

class AllRules extends IntlComponent {

  static propTypes = {
    rules: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      selectedRowKeys: [],
      container: [],
      visible: false,
      rulesType: 'alert',
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSearchRules = this.handleSearchRules.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    this.props.actions.getRules({ server: 'server' })
  }

  handleChangeSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
    if (e.target.value === '') {
      this.props.actions.getRules({ server: 'server' })
    }
  }

  handleOk = () => {
    this.setState({ visible: false })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  // 查询
  handleSearchRules = () => {
    const { searchValue } = this.state
    this.props.actions.getRules({
      server: 'server',
      search: searchValue
    })
  }

  // 重置
  handleReset = () => {
    this.setState({ searchValue: '' })
    this.props.actions.getRules({
      server: 'server'
    })
  }

  // 规则下发
  handleRulesPost = () => {
    const { selectedRowKeys } = this.state
    if (selectedRowKeys.length === 0) {
      Message.info('请选择要下发到客户端的规则')
    } else {
      this.setState({ visible: true })
    }
  }

  // 规则下发多选
  onSelectChange = (selectedRowKeys, record) => {
    console.info('selectedRowKeys', selectedRowKeys)
    console.info('record', record)
    this.setState({ selectedRowKeys })
    this.setState({ container: record })
  }

  // 防御策略
  changeRulesType = (e) => {
    this.setState({ rulesType: e.target.value })
  }

  render() {
    const { rules } = this.props
    const {
      searchValue, selectedRowKeys, visible, rulesType
    } = this.state

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }

    return (
      <div className={style.allRules}>
        <Bread
          items={[
            { content: '规则管理' },
            { content: '全部规则' },
          ]}
        />
        <ContentBox>
          <Subheader>全部规则</Subheader>
          <div className={style.search}>
            <div className={style.leftSearch}>
              <div>
                搜索：
                <Input
                  style={{ width: 250 }}
                  allowClear
                  placeholder="输入规则关键字，支持模糊搜索"
                  value={searchValue}
                  onChange={this.handleChangeSearch}
                />
              </div>
              <div>
                <Button style={{ marginLeft: 15 }} type="primary" onClick={this.handleSearchRules}>查询</Button>
                <Button style={{ marginLeft: 15 }} onClick={this.handleReset}>重置</Button>
              </div>
            </div>
            <div>
              <Button type="primary" onClick={this.handleRulesPost}>规则下发</Button>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          <Table
            bordered
            columns={columns}
            dataSource={rules}
            rowSelection={rowSelection}
            rowKey={(r) => r.sid}
          />
        </ContentBox>
        <Modal
          title="防御策略"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
        >
          策略：
          <Radio.Group onChange={this.changeRulesType} value={rulesType}>
            <Radio value="alert">告警</Radio>
            <Radio value="drop">拦截</Radio>
          </Radio.Group>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRules)
