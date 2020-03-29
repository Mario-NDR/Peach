import { zoneTransfer } from 'Utils/time'

const title = {
  text: '',
  x: 'center',
  y: '8px',
  textStyle: {
    color: '#666',
    fontWeight: '400',
    fontSize: '30',
    paddingTop: '-10',
  }
}

const tooltip = {
  trigger: 'item',
  position(point, _params, _dom, _rect, size) {
    return [ point[0] - size.contentSize[0] / 2, point[1] + 10 ]
  },
}

const geo = {
  name: '',
  type: 'map',
  map: 'world',
  roam: true, // 是否支持缩放
  zoom: 1.5,
  z: 1,
  // left: '20',
  label: { // 图形上的文本标签,这里不显示
    normal: {
      show: false,
      textStyle: {
        color: '#e6eaee',
      },
    },
    emphasis: {
      show: true,
      textStyle: {
        color: '#FF9966',
      },
    },
  },
  itemStyle: { // 地图区域的多边形 图形样式
    normal: {
      areaColor: 'rgb(90, 152, 244)',
      borderColor: 'rgb(230, 234, 238)'
    },
    emphasis: {
      // color: 'rgb(230, 234, 238)' // 鼠标悬浮国家的背景颜色
    }
  }
}

// /////////////////////////////////////////////////////////////// scatter
const scatterCfg = {
  type: 'scatter',
  coordinateSystem: 'geo',
  animationThreshold: 50000, // 可以容纳的动画数量
  legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
  effectType: 'ripple', // 特效类型，目前只支持涟漪特效'ripple'
  showEffectOn: 'render', // 配置何时显示特效，render表示渲染完就显示
  rippleEffect: { // 涟漪特效相关配置
    period: 5,
    scale: 3,
    brushType: 'stroke'
  },
  tooltip: {
    trigger: 'item',
    position: 'top',
    formatter(param) {
      return `${param.marker}城市: ${param.name}<br />${param.marker}${param.componentIndex === 0 ? '被攻击次数' : '攻击次数'}: ${param.data.value[2]}`
    },
  },
}

const scatterDataCfgAttack = {
  z: 2,
  itemStyle: {
    normal: {
      color: 'rgb(245, 109, 7)' // 攻击者散点
    }
  },
}

const scatterDataCfgTarget = {
  z: 2,
  itemStyle: {
    normal: {
      color: 'rgb(204, 0, 102)' // 被攻击者散点
    }
  },
}

// 攻击者散点，带波纹效果
const renderEffectScatterData = data => {
  if (!data || !data.length) {
    return []
  }
  const Data = []
  const symbolSize = 10
  data.forEach((item) => {
    Data.push({
      ...scatterDataCfgAttack,
      symbolSize,
      name: item.src.city,
      value: [ item.src.longitude, item.src.latitude, item.src.src_count ],
    })
  })
  return Data
}

// 被攻击者散点，不带波纹效果
const renderScatterData = data => {
  if (!data || !data.length) {
    return []
  }
  const Data = []
  const symbolSize = 10
  data.forEach((item) => {
    Data.push({
      ...scatterDataCfgTarget,
      symbolSize,
      name: item.dest.city,
      value: [ item.dest.longitude, item.dest.latitude, item.dest.dest_count ],
    })
  })
  return Data
}

// /////////////////////////////////////////////////////////////// line
const linesCfg = {
  type: 'lines',
  coordinateSystem: 'geo',
  // polyline: false,
  effect: {
    show: true,
    period: 20, // 箭头指向速度，值越小速度越快
    trailLength: 0.002, // 特效尾迹长度[0,1]值越大，尾迹越长重
    symbol: 'arrow', // 箭头图标
    symbolSize: 6, // 图标大小
  },
  zlevel: 1,
  lineStyle: {
    normal: {
      width: 1, // 尾迹线条宽度
      opacity: 0.5, // 尾迹线条透明度
      curveness: 0.3, // 尾迹线条曲直度
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [ {
          offset: 0, color: 'rgb(240, 90, 58)' // 0% 处的颜色
        }, {
          // offset: 1, color: 'rgb(162, 159, 160)' // 100% 处的颜色
          offset: 1, color: 'rgb(204, 0, 102)' // 100% 处的颜色
          // offset: 1, color: 'rgb(255, 255, 255)' // 100% 处的颜色

        } ],
        global: false // 缺省为 false
      },
    }
  },
}

// 地图之间点的连线
const renderLinesData = data => {
  if (!data || !data.length) {
    return []
  }
  const Data = []
  data.forEach((item) => {
    Data.push({
      coords: [
        [ String(item.src.longitude), String(item.src.latitude) ],
        [ String(item.dest.longitude), String(item.dest.latitude) ],
      ],
      city: [ item.src.city, item.dest.city ],
      country: [ item.src.country, item.dest.country ],
      port: [ item.src.ip, item.dest.ip ],
      message: item.alert_message,
      date: item.time,
      action: item.action,
    })
  })
  return Data
}

export default (data) => {
  return {
    title,
    geo,
    tooltip,
    formatter(param) {
      return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${param.color.colorStops[0].color};"></span>${param.data.country[0]}: ${param.data.city[0]}<span style="color: #FF6600"> ———— </span><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${param.color.colorStops[1].color};"></span>${param.data.country[1]}: ${param.data.city[1]}<br />源IP: ${param.data.port[0]}<br />目的IP: ${param.data.port[1]}<br />时间: ${zoneTransfer(param.data.date, 'YYYY-MM-DD HH:mm:ss')}<br />防御策略: ${param.data.action === 'blocked' ? '已拦截' : '仅告警'}<br /> ${param.data.message}`
    },
    series: [
      {
        ...scatterCfg,
        type: 'effectScatter',
        data: renderScatterData(data),
      },
      {
        ...scatterCfg,
        type: 'effectScatter',
        data: renderEffectScatterData(data),
      },
      {
        ...linesCfg,
        data: renderLinesData(data),
      },
    ]
  }
}
