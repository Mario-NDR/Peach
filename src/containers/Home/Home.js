/**
 * @summary 态势感知
 */
import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import { IntlComponent } from 'Components/Common'

import Map from './Map'
import style from './style.scss'
import * as actions from './action'

const { RangePicker } = DatePicker
const defaultStartDate = moment().subtract(1, 'hours')
const defaultEndDate = moment()

class Home extends IntlComponent {

  static propTypes = {
    mapDetail: PropTypes.array,
    data: PropTypes.array,
  }

  static defaultProps = {
    mapDetail: [],
    data: [],
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.props.actions.getMapDetailData({
      begintime: moment().subtract(1, 'hours').format('YYYY-MM-DDTHH+0800'),
      endtime: moment().format('YYYY-MM-DDTHH+0800')
    })
  }

  onOk = (value) => {
    this.props.actions.getMapDetailData({
      begintime: value[0].format('YYYY-MM-DDTHH+0800'),
      endtime: value[1].format('YYYY-MM-DDTHH+0800')
    })
  }

  disabledDate = (current) => {
    return current && current > moment().endOf('day')
  }

  render() {
    const { mapDetail } = this.props

    return (
      <div className={style.map}>
        <div className={style.dateSelect}>
          <RangePicker
            style={{ width: 600 }}
            format="YYYY-MM-DD HH:00:00"
            showTime={{ format: 'HH时' }}
            defaultValue={[ defaultStartDate, defaultEndDate ]}
            disabledDate={this.disabledDate}
            onOk={this.onOk}
          />
        </div>
        <section className={style.wrapper}>
          <Map data={mapDetail} />
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapDetail: state.mapReducer.mapDetail,
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
