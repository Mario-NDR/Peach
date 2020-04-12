/**
 * @sumary 入侵防御
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { Table, Tooltip, Tag, Modal, Radio } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import { zoneTransfer, formatTime } from 'Utils/time'
import { ellipsis } from 'Utils/string'

import * as actions from '../../../Home/action'
import style from './style.scss'

moment.suppressDeprecationWarnings = true

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      typeSelect: '',
      selectionRecord: {},
    }
  }

  columns = [
    {
      dataIndex: 'time',
      title: '时间',
      key: 'time',
      align: 'center',
      render: (text) => (
        <div className={style.tableTime}>
          {zoneTransfer(text, 'YYYY-MM-DD HH:mm:ss')}
        </div>
      )
    },
    {
      dataIndex: 'client_ip',
      title: '客户端',
      key: 'client_ip',
      align: 'center',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'src',
      title: '源IP',
      key: 'src',
      align: 'center',
      render: (text) => (
        <div className={style.tableSrc}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'dest',
      title: '目的IP',
      key: 'dest',
      align: 'center',
      render: (text) => (
        <div className={style.tableDest}>
          {text}
        </div>
      )
    },
    {
      dataIndex: 'alert_message',
      title: '告警信息',
      key: 'alert_message',
      align: 'center',
      render: (text) => (
        <Tooltip title={text} className={style.tableTime}>
          {ellipsis(text, 40)}
        </Tooltip>
      )
    },
    {
      dataIndex: 'action',
      title: '防御策略',
      key: 'action',
      align: 'center',
      render: (text) => {
        if (text === 'allowed') {
          return (
          <Tag color="volcano">
            {'仅告警'}
          </Tag>
          )
        }
        return (
          <Tag color="green">
            {'已拦截'}
          </Tag>
        )
      }
    },
    {
      dataIndex: 'category',
      title: '攻击类型',
      key: 'category',
      align: 'center',
      render: (text) => {
        if (text === 'A Network Trojan was detected') {
          return (
            <Tag color="red">
              {'木马活动'}
            </Tag>
          )
        } else if (text === 'Detection of a Network Scan') {
          return (
            <Tag color="lime">
              {'网络扫描'}
            </Tag>
          )
        } else if (text === 'Executable code was detected') {
          return (
            <Tag color="orange">
              {'恶意代码'}
            </Tag>
          )
        } else {
          return (
            <Tag color="orange">
              {'其他类型'}
            </Tag>
          )
        }
      }
    },
  ]

  componentDidMount() {
    this.props.actions.getMapDetailData()
  }

  renderPagination = () => {
    return { pageSize: 20 }
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  // 选择要查询的IP
  handleChangeType = (e) => {
    const { selectionRecord } = this.state
    this.setState({ typeSelect: e.target.value })
    if (e.target.value === 0) {
      this.props.actions.postSecurityBrain({ query: selectionRecord.client_ip })
    } else if (e.target.value === 1) {
      this.props.actions.postSecurityBrain({ query: selectionRecord.src })
    } else {
      this.props.actions.postSecurityBrain({ query: selectionRecord.dest })
    }
  }

  render() {
    let { mapDetail } = this.props
    const { securityBrain } = this.props
    let brain1 = {}
    let brain2 = {}
    if (Object.keys(securityBrain).length !== 0) {
      brain1 = securityBrain.data[0]
      brain2 = securityBrain.data[1]
    }
    const { visible, typeSelect } = this.state
    if (mapDetail.length !== 0) {
      mapDetail = mapDetail.map((item) => {
        return {
          src: item.src.ip,
          dest: item.dest.ip,
          time: item.time,
          client_ip: item.client_ip,
          action: item.action,
          alert_message: item.alert_message,
          category: item.category
        }
      })
    }

    return (
      <ContentBox>
        <Subheader>入侵防御记录</Subheader>
        <div className={style.tableList}>
          <div style={{ marginBottom: 10, marginLeft: 10 }}>
            {`共 ${mapDetail.length} 条记录`}
          </div>
          <Table
            bordered
            columns={this.columns}
            dataSource={mapDetail}
            pagination={this.renderPagination()}
            rowKey={(r) => r.time}
            onRow={(record) => ({
              onClick: () => {
                const selection = window.getSelection()
                if (selection.toString().length === 0) {
                  this.setState({
                    visible: true,
                    selectionRecord: record,
                  })
                }
              }
            })}
          />
        </div>
        <Modal
          width="70%"
          title="安全大脑威胁分析结果"
          visible={visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Radio.Group
            onChange={this.handleChangeType}
            value={typeSelect}
          >
            <Radio value={0}>客户端</Radio>
            <Radio value={1}>源IP</Radio>
            <Radio value={2}>目的IP</Radio>
          </Radio.Group>
          <div className={style.brainModule}>
            <div>
              <div>
                <div>
                  <span>最后活跃时间: </span>
                  <span>
                    {
                      Object.keys(brain1).length === 0
                        ? '--'
                        : !isNaN(brain1.active_time)
                          ? (<Tag color="#87d068">{formatTime(brain1.active_time)}</Tag>)
                          : '--'
                    }
                  </span>
                </div>
                <div>
                  <span>多引擎威胁分析结果: </span>
                  <span>
                    {
                      Object.keys(brain1).length === 0
                        ? '--'
                        : brain1.engine_result.length === 0
                          ? '--'
                          : brain1.engine_result.map((item, key) => (<Tag key={key} color="#87d068">{item}</Tag>))
                    }
                  </span>
                </div>
                <div>
                  <span>分析引擎: </span>
                  <span>
                    {
                      Object.keys(brain1).length === 0
                        ? '--'
                        : brain1.vendor.length === 0
                          ? '--'
                          : brain1.vendor
                    }
                  </span>
                </div>
              </div>
            </div>
            <div>--水波图1--</div>
          </div>
          <div className={style.brainModule}>
            <div>
              <div>
                <div>
                  <span>最后活跃时间: </span>
                  <span>
                    {
                      Object.keys(brain2).length === 0
                        ? '--'
                        : !isNaN(brain2.active_time)
                          ? (<Tag color="#87d068">{formatTime(brain2.active_time)}</Tag>)
                          : '--'
                    }
                  </span>
                </div>
                <div>
                  <span>城市: </span>
                  <span>
                    {
                      Object.keys(brain2).length === 0
                        ? '--'
                        : brain2.city.length === 0
                          ? '--'
                          : brain2.city
                    }
                  </span>
                </div>
                <div>
                  <span>运营商: </span>
                  <span>
                    {
                      Object.keys(brain2).length === 0
                        ? '--'
                        : brain2.operator.length === 0
                          ? '--'
                          : brain2.operator
                    }
                  </span>
                </div>
                <div>
                  <span>Tags: </span>
                  <span>
                    {
                      Object.keys(brain2).length === 0
                        ? '--'
                        : brain2.tags.length === 0
                          ? '--'
                          : brain2.tags.map((item, key) => (<Tag key={key} color="#87d068">{item}</Tag>))
                    }
                  </span>
                </div>
                <div>
                  <span>分析引擎: </span>
                  <span>
                    {
                      Object.keys(brain2).length === 0
                        ? '--'
                        : brain2.vendor.length === 0
                          ? '--'
                          : brain2.vendor
                    }
                  </span>
                </div>
              </div>
            </div>
            <div>--水波图2--</div>
          </div>
        </Modal>
      </ContentBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapDetail: state.mapReducer.mapDetail,
    securityBrain: state.mapReducer.securityBrain,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
