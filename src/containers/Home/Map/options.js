const title = {
  // text: '网站侦控分布情况',
  x: 'center',
  y: '8px',
  textStyle: {
    color: '#666',
    fontWeight: '400',
  }
}

const tooltip = {
  trigger: 'item',
}

const geo = {
  name: '',
  type: 'map',
  map: 'world',
  roam: false,
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
      show: false,
      textStyle: {
        color: '#e6eaee',
      },
    },
  },
  itemStyle: { // 地图区域的多边形 图形样式
    normal: {
      areaColor: 'rgb(230, 234, 238)',
      borderColor: 'rgb(230, 234, 238)'
    },
    emphasis: {
      color: 'rgb(230, 234, 238)'
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
    scale: 2,
    brushType: 'stroke'
  },
  tooltip: {
    trigger: 'item',
    formatter(param) {
      return `IP: ${param.name}<br />次数: ${param.data.value[2]}`
    },
  },
}

const scatterDataCfgAttack = {
  z: 2,
  itemStyle: {
    normal: {
      color: 'rgb(245, 109, 7)'
    }
  },
}

const scatterDataCfgTarget = {
  z: 2,
  itemStyle: {
    normal: {
      color: 'rgb(7, 52, 145)'
    }
  },
}

const MAX_SCATTER_SIZE = 40
const MIN_SCATTER_SIZE = 8

// 攻击者散点，带波纹效果
// const renderEffectScatterData = data => {
//   if (!data || !data.length) {
//     return []
//   }
//   const effectScatterData = []
//   const max = Math.max(...(data.map(i => i.attackIp.count))) // 取出最大的count，以它为基准计算其他点的symbolSize
//   data.forEach(item => {
//     if (item.attackIp && !_.isEmpty(item.attackIp)) {
//       const { attackIp } = item
//       let symbolSize = MAX_SCATTER_SIZE * (item.attackIp.count / max)
//       if (symbolSize < MIN_SCATTER_SIZE) symbolSize = MIN_SCATTER_SIZE
//       effectScatterData.push({
//         ...scatterDataCfgAttack,
//         symbolSize,
//         name: attackIp.ip,
//         value: [ attackIp.longitude, attackIp.latitude, attackIp.count ],
//       })
//     }
//   })
//   return effectScatterData
// }

// 被攻击者散点，不带波纹效果
// const renderScatterData = data => {
//   if (!data || !data.length) {
//     return []
//   }
//   const scatterData = []
//   const max = Math.max(...(data.map(i => i.attackIp.count)))
//   data.forEach(item => {
//     if (item.victimIp && !_.isEmpty(item.victimIp)) {
//       const { victimIp } = item
//       victimIp.forEach(v => {
//         let symbolSize = MAX_SCATTER_SIZE * (v.count / max)
//         if (symbolSize < MIN_SCATTER_SIZE) symbolSize = MIN_SCATTER_SIZE
//         scatterData.push({
//           ...scatterDataCfgTarget,
//           symbolSize,
//           name: v.ip,
//           value: [ v.longitude, v.latitude, v.count ],
//         })
//       })
//     }
//   })
//   return scatterData
// }

// /////////////////////////////////////////////////////////////// line
const linesCfg = {
  type: 'lines',
  coordinateSystem: 'geo',
  // polyline: false,
  effect: {
    show: true,
    period: 4, // 箭头指向速度，值越小速度越快
    trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
    symbol: 'arrow', // 箭头图标
    symbolSize: 6, // 图标大小
  },
  zlevel: 1,
  lineStyle: {
    normal: {
      width: 1, // 尾迹线条宽度
      opacity: 1, // 尾迹线条透明度
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
          offset: 1, color: 'rgb(162, 159, 160)' // 100% 处的颜色
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
      ]
    })
  })
  return Data
}

export default (data) => {
  return {
    title,
    geo,
    tooltip,
    series: [
      // {
      //   ...scatterCfg,
      //   data: renderScatterData(data),
      // },
      // {
      //   ...scatterCfg,
      //   type: 'effectScatter',
      //   data: renderEffectScatterData(data),
      // },
      {
        ...linesCfg,
        data: renderLinesData(data),
      },
    ]
  }
}
