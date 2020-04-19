/**
 * @summary 规则策略 -- 全部规则
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Table, Button, Input, Message, Modal, Radio, Spin, Icon,
} from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Bread from 'Components/Bread'
import Subheader from 'Components/Subheader'
import columns from './config'

import * as actions from '../action'
import style from './style.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

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
      selectRules: 0,
      loadingAll: true,
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

  componentWillReceiveProps(nextProps) {
    if (this.props.loadingAll !== nextProps.loadingAll) {
      this.setState({ loadingAll: false })
    }
  }

  handleChangeSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
    if (e.target.value === '') {
      this.props.actions.getRules({ server: 'server' })
    }
  }

  handleOk = async () => {
    const { container, rulesType } = this.state
    this.setState({ visible: false })
    const rules_info = container.map((item) => ({ id: item.sid, type: rulesType }))
    const payload = JSON.stringify({ rules_info })
    try {
      const { status } = await axios.post('/api/rules', payload)
      if (status >= 200 && status < 400) {
        Message.success(this.localeMessage('successSetRules'))
        this.setState({ selectedRowKeys: [], container: [] })
      }
    } catch (e) {
      console.err('error', e)
      Message.error(this.localeMessage('errorSetRules'))
    }
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  // 查询
  handleSearchRules = () => {
    const { searchValue } = this.state
    if (searchValue.length !== 0) {
      this.setState({ loadingAll: true })
      this.props.actions.getRules({
        server: 'server',
        search: searchValue
      })
    } else {
      Message.info('请输入关键字')
    }
  }

  // 重置
  handleReset = () => {
    this.setState({ loadingAll: true })
    const { searchValue } = this.state
    this.setState({ searchValue: '' })
    if (searchValue.length !== 0) {
      this.props.actions.getRules({
        server: 'server'
      })
    }
  }

  // 规则下发
  handleRulesPost = () => {
    const { selectedRowKeys } = this.state
    if (selectedRowKeys.length === 0) {
      Message.info(this.localeMessage('alertInfo'))
    } else {
      this.setState({ visible: true })
    }
  }

  // 规则下发多选
  onSelectChange = (selectedRowKeys, record) => {
    this.setState({
      selectedRowKeys,
      container: record,
      selectRules: selectedRowKeys.length,
    })
  }

  // 防御策略
  changeRulesType = (e) => {
    this.setState({ rulesType: e.target.value })
  }

  render() {
    const { rules } = this.props
    const {
      searchValue, selectedRowKeys, visible, rulesType, selectRules,
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
                  placeholder={this.localeMessage('placeholderSearchRules')}
                  value={searchValue}
                  onChange={this.handleChangeSearch}
                />
              </div>
              <div>
                <Button
                  style={{ marginLeft: 15 }}
                  type="primary"
                  onClick={this.handleSearchRules}
                >
                  查询
                  </Button>
                <Button
                  style={{ marginLeft: 15 }}
                  disabled={searchValue.length === 0}
                  onClick={this.handleReset}
                >
                  重置
                </Button>
              </div>
            </div>
            <div>
              <Button type="primary" onClick={this.handleRulesPost}>规则下发</Button>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          <Spin spinning={this.state.loadingAll} indicator={antIcon} tip="加载中">
            <div
              style={{
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              {
                `共 ${rules.length} 条规则${
                  selectRules !== 0
                    ? selectRules === rules.length
                      ? '，全部选择'
                      : `，已选择 ${selectRules} 条规则`
                    : ''
                }`
              }
            </div>
            <Table
              bordered
              columns={columns}
              dataSource={rules}
              rowSelection={rowSelection}
              pagination={false}
              rowKey={(r) => r.sid}
            />
          </Spin>
        </ContentBox>
        <Modal
          title={this.localeMessage('modalRulesTitle')}
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
    loadingAll: state.rulesReducer.loadingAll,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRules)
