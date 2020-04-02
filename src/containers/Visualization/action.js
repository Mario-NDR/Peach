import network from 'Utils/network'
// import api from 'Constants/api'

// 获取规则
export function getPieData(payload = {}) {
  return network.GET('/api/db', payload, (data) => ({
    data,
    type: 'getPieData',
  }))
}
