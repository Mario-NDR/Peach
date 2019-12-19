/**
 * @summary 地图组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IntlComponent } from 'Components/Common'
import worldMapJson from 'Maps/world.json'

import mapOption from './options'
import style from './style.scss'

import getMapDetailData from '../action'

class Map extends IntlComponent {

  static propTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props)
    this.map = null
  }


  // [
  //   [i.attackIp.longitude, i.attackIp.latitude],
  //   [v.longitude, v.latitude],
  //         ]
  componentDidMount() {
    this.props.getMapDetailData()
    const data = [
      {
        coords: [
          [ '116.3889', '39.9288' ],
          [ '-118.2578', '34.0549' ],
        ]
      }
    ]
    this.map = echarts.init(document.querySelector('#overviewMap'))
    echarts.registerMap('world', worldMapJson)
    // this.map.setOption(mapOption(this.props.data))
    this.map.setOption(mapOption(data))
  }

  // componentDidUpdate() {
  //   this.map.setOption(mapOption(this.props.data))
  // }

  render() {
    return (
      <section className={style.mapWrapper}><div id="overviewMap" style={{ width: '85%', height: '500%' }} /></section>
    )
  }
}

function mapStateToProps(state) {
  return {
    vulEventList: state.mapReducer.mapDetail,
  }
}


function mapDispatchToProps(dispatch) {
  // return { actions: bindActionCreators({ getMapDetailData }, dispatch) }
  return bindActionCreators({ getMapDetailData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
