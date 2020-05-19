/**
 * @sumary 入侵防御
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { Table, Tooltip, Tag, Modal, Spin, Icon } from 'antd'
import echarts from 'echarts'
import 'echarts-liquidfill'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import moment from 'moment'

import { IntlComponent } from 'Components/Common'
import ContentBox from 'Components/ContentBox'
import Subheader from 'Components/Subheader'
import { zoneTransfer, formatTime } from 'Utils/time'
import { ellipsis } from 'Utils/string'
import mapOption from './option'

import * as actions from '../../../Home/action'
import style from './style.scss'

moment.suppressDeprecationWarnings = true

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

class Home extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      ipTitle: '',
      ip: '',
      loadingModal: true,
      loadingTable: true,
    }
    this.liquid1 = null
    this.liquid2 = null
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
        <div
          role="button"
          className={style.tableDest}
          onClick={() => this.clickClient(text)}
        >
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
        <div
          role="button"
          className={style.tableSrc}
          onClick={() => this.clickSrc(text)}
        >
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
        <div
          role="button"
          className={style.tableDest}
          onClick={() => this.clickDest(text)}
        >
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
        } else if (text === 'A system call was detected') {
          return (
            <Tag color="orange">
              {'威胁情报'}
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
    this.props.actions.clearMapDetailData()
    this.props.actions.getMapDetailData()
  }

  componentDidUpdate() { }

  componentWillReceiveProps(nextProps) {
    if (this.props.loadingTable !== nextProps.loadingTable) {
      this.setState({ loadingTable: false })
    }
    if (this.props.loadingModal !== nextProps.loadingModal) {
      this.setState({ loadingModal: false })
      this.liquid1.setOption(mapOption(nextProps.securityBrain.data[0].threat_score / 10))
      this.liquid2.setOption(mapOption(nextProps.securityBrain.data[1].threat_score / 100))
    }
  }

  renderPagination = () => {
    return { pageSize: 20 }
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  clickClient = (r) => {
    this.setState({ visible: true, ipTitle: '客户端', ip: r, loadingModal: true })
    this.props.actions.postSecurityBrain({ query: r })
  }

  clickSrc = (r) => {
    this.setState({ visible: true, ipTitle: '源IP', ip: r, loadingModal: true })
    this.props.actions.postSecurityBrain({ query: r })
  }

  clickDest = (r) => {
    this.setState({ visible: true, ipTitle: '目的IP', ip: r, loadingModal: true })
    this.props.actions.postSecurityBrain({ query: r })
  }

  modalRef = (obj) => {
    if (obj) {
      this.echartsFn(obj)
    }
  }

  async echartsFn() {
    this.liquid1 = echarts.init(document.querySelector('#liquidFill1'))
    this.liquid2 = echarts.init(document.querySelector('#liquidFill2'))
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
    const { visible } = this.state
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
          <Spin spinning={this.state.loadingTable} indicator={antIcon} tip="加载中">
            <div style={{ marginBottom: 10, marginLeft: 10 }}>
              {`共 ${mapDetail.length} 条记录`}
            </div>
            <Table
              bordered
              columns={this.columns}
              dataSource={mapDetail}
              pagination={this.renderPagination()}
            />
          </Spin>
        </div>
        <Modal
          wrapClassName="modal"
          width="40%"
          title="安全大脑威胁分析结果"
          visible={visible}
          footer={null}
          onCancel={this.handleCancel}
          destroyOnClose
        >
          <div className={style.modalTitle}>
            <span>{`${this.state.ipTitle}: `}</span>
            <span className={style.modalTitleIp}>{this.state.ip}</span>
          </div>
          <Spin spinning={this.state.loadingModal} indicator={antIcon} tip="加载中">
            <div className={style.brainModule}>
              <div>
                <div>
                  <div className={style.item}>
                    <span>最后活跃时间: </span>
                    <span>
                      {
                        Object.keys(brain1).length === 0
                          ? '--'
                          : !isNaN(brain1.active_time)
                            ? (<Tag color="#e4a318">{formatTime(brain1.active_time)}</Tag>)
                            : '--'
                      }
                    </span>
                  </div>
                  <div className={style.item}>
                    <span>检出威胁引擎: </span>
                    <span>
                      {
                        Object.keys(brain1).length === 0
                          ? '--'
                          : brain1.engine_result.length === 0
                            ? '--'
                            : brain1.engine_result.map((item, key) => (<Tag key={key} color="#e4a318">{item}</Tag>))
                      }
                    </span>
                  </div>
                  <div className={style.item}>
                    <span>引擎: </span>
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
              <section>
                <div id="liquidFill1" style={{ width: '200%', height: '200%' }} ref={this.modalRef} />
              </section>
            </div>
          </Spin>
          <Spin spinning={this.state.loadingModal} indicator={antIcon} tip="加载中">
            <div className={style.brainModule}>
              <div>
                <div>
                  <div className={style.item}>
                    <span>最后活跃时间: </span>
                    <span>
                      {
                        Object.keys(brain2).length === 0
                          ? '--'
                          : !isNaN(brain2.active_time)
                            ? (<Tag color="#e4a318">{formatTime(brain2.active_time)}</Tag>)
                            : '--'
                      }
                    </span>
                  </div>
                  <div className={style.item}>
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
                  <div className={style.item}>
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
                  <div className={style.item}>
                    <span>标签: </span>
                    <span>
                      {
                        Object.keys(brain2).length === 0
                          ? '--'
                          : brain2.tags.length === 0
                            ? '--'
                            : brain2.tags.map((item, key) => (<Tag key={key} color="#e4a318">{item}</Tag>))
                      }
                    </span>
                  </div>
                  <div className={style.item}>
                    <span>引擎: </span>
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
              <section>
                <div id="liquidFill2" style={{ width: '200%', height: '200%' }} ref={this.modalRef} />
              </section>
            </div>
          </Spin>
        </Modal>
      </ContentBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapDetail: state.mapReducer.mapDetail,
    securityBrain: state.mapReducer.securityBrain,
    loadingModal: state.mapReducer.loadingModal,
    loadingTable: state.mapReducer.loadingTable,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
