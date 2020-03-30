/**
 * @summary 规则策略 -- 全部规则
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Input } from 'antd'

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
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSearchRules = this.handleSearchRules.bind(this)
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

  render() {
    const { rules } = this.props
    const { searchValue } = this.state

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
              <Button type="primary" onClick={this.handleSearchRules}>查询</Button>
              <Button style={{ marginLeft: 15 }} onClick={this.handleReset}>重置</Button>
            </div>
          </div>
        </ContentBox>
        <ContentBox>
          <Table
            bordered
            columns={columns}
            dataSource={rules}
            rowKey={(r) => r.sid}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRules)
