/**
 * @summary 地图组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

import { IntlComponent } from 'Components/Common'
import worldMapJson from 'Maps/world.json'

import mapOption from './options'
import style from './style.scss'

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

  componentDidMount() {
    this.map = echarts.init(document.querySelector('#overviewMap'))
    echarts.registerMap('world', worldMapJson)
    this.map.setOption(mapOption(this.props.data))
  }

  componentDidUpdate() {
    this.map.setOption(mapOption(this.props.data))
  }

  render() {
    return (
      <section className={style.mapWrapper}><div id="overviewMap" style={{ width: '90%', height: '700px' }} /></section>
    )
  }
}

export default Map
