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
import axios from 'axios'

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

  handleOk = async () => {
    const { container, rulesType } = this.state
    this.setState({ visible: false })
    const rules_info = container.map((item) => ({ id: item.sid, type: rulesType }))
    const payload = JSON.stringify({ rules_info })
    try {
      const { data } = await axios.post('/api/rules', payload)
      if (data === 'ok') {
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
      this.props.actions.getRules({
        server: 'server',
        search: searchValue
      })
    }
  }

  // 重置
  handleReset = () => {
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
    this.setState({ selectedRowKeys })
    this.setState({ container: record })
  }

  // 防御策略
  changeRulesType = (e) => {
    this.setState({ rulesType: e.target.value })
  }

  allRulesChange = () => {
    this.setState({ selectedRowKeys: [], container: [] })
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
                  placeholder={this.localeMessage('placeholderSearchRules')}
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
            onChange={this.allRulesChange}
            // rowKey={(r) => r.sid}
          />
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
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRules)
