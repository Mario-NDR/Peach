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

import * as actions from '../action'

class Map extends IntlComponent {

  static propTypes = {
    mapDetail: PropTypes.array,
  }

  static defaultProps = {
    mapDetail: [],
  }

  constructor(props) {
    super(props)
    this.map = null
  }

  componentDidMount() {
    this.map = echarts.init(document.querySelector('#overviewMap'))
    echarts.registerMap('world', worldMapJson)
    this.map.setOption(mapOption(this.props.data))
    // this.map.setOption(mapOption(data))
  }
  
  componentDidUpdate() {
    this.map.setOption(mapOption(this.props.data))
  }

  render() {
    return (
      <section className={style.mapWrapper}><div id="overviewMap" style={{ width: '85%', height: '500%' }} /></section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Map)
