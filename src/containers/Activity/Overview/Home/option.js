export default (data) => {
  return {
    title: {
      top: '40%',
      left: 'center',
      text: '威胁指数',
      textStyle: {
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16
      },
      subtext: ` ${(data * 10000 / 100).toFixed(2)} `,
      subtextStyle: {
        color: '#504e4e',
        fontSize: 12
      }
    },
    series: [
      {
        type: 'liquidFill',
        color: [ '#53d5ff' ],
        background: '#fff',
        name: 'middleLost',
        data: [
          {
            value: data,
            direction: 'left',
            itemStyle: {
              normal: {
                color: data >= 0.7 ? '#aa2d2d' : '#53d5ff'
              }
            }
          }
        ],
        radius: '90%',
        shape: 'roundRect', // 圆角正方形
        // shape: 'rect', // 正方形
        // shape: 'triangle', // 正三角形
        // shape: 'diamond', // 菱形
        // shape: 'pin', // 水滴形
        // shape: 'arrow', // 多边形
        center: [ '50%', '50%' ],
        label: {
          normal: {
            formatter: '',
            textStyle: {
              fontSize: 12
            }
          }
        },
        backgroundStyle: {
          // color: '#e7d152',
          color: '#ecebeb',
          borderColor: '#156ACF',
          borderWidth: 2,
          shadowColor: 'rgba(0, 0, 0, 0)',
          shadowBlur: 20
        },
        outline: {
          show: false
        },
        waveAnimation: true, // 禁止左右波动
      }
    ]
  }
}
