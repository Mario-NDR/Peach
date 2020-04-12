/**
 * @summary 规则策略 -- 防御策略
 */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import { Table, Button, Input, Message } from 'antd'

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
    this.state = { searchValue: '' }
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
    if (searchValue.length !== 0) {
      this.props.actions.getRules({
        server: 'client',
        search: searchValue
      })
    } else {
      Message.info('请输入关键字')
    }
  }

  // 重置
  handleReset = () => {
    const { searchValue } = this.state
    if (searchValue.length !== 0) {
      this.setState({ searchValue: '' })
      this.props.actions.getRules({ server: 'client' })
    }
  }

  // 修改防御策略
  confirm = async (record) => {
    const payload = { id: record.sid, type: record.type === 'drop' ? 'alert' : 'drop' }
    try {
      await axios.post('/api/rules/change', payload)
      this.props.actions.getRules({ server: 'client' })
    } catch (e) {
      console.info('error', e)
      Message.error(this.localeMessage('errorEditRules'))
    }
  }

  cancel = (record) => {
    console.info('cancel', record)
  }

  // 删除防御策略
  confirmDel = async (record) => {
    const payload = { id: record.sid, type: record.type }
    try {
      await axios.post('/api/rules/del', payload)
      Message.success(this.localeMessage('successDelRules'))
      this.props.actions.getRules({ server: 'client' })
    } catch (e) {
      console.info('error', e)
      Message.error(this.localeMessage('errorDelRules'))
    }
  }

  cancelDel = (record) => {
    console.info(record)
  }

  // 删除策略
  handleDelRules = async () => {
    const { status } = await axios.delete('/api/rules/del')
    if (status >= 200 && status < 400) {
      Message.success(this.localeMessage('successDelAllRules'))
      this.props.actions.getRules({ server: 'client' })
    } else {
      Message.error(this.localeMessage('errorDelAllRules'))
    }
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
              <div className={style.leftSearch}>
                <div>
                  搜索：
                  <Input
                    style={{ width: 250 }}
                    allowClear
                    placeholder={this.localeMessage('placeholderSearchRules')}
                    value={searchValue}
                    onChange={this.handleChangeInput}
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
                <Button type="danger" disabled={rules.length === 0} onClick={this.handleDelRules}>全部删除</Button>
              </div>
            </div>
          </ContentBox>
        </div>
        <ContentBox>
          <div className={style.prizeTable}>
            <div style={{ marginLeft: 10, marginBottom: 10 }}>
              {`共 ${rules.length} 条防御策略`}
            </div>
            <Table
              bordered
              columns={
                columns(
                  this.confirm,
                  this.cancel,
                  this.confirmDel,
                  this.cancelDel,
                )
              }
              dataSource={rules}
              // rowKey={(r) => r.sid}
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
