import network from 'Utils/network'
// import api from 'Constants/api'

// 获取规则
export function getPieData(payload = {}) {
  return network.GET('/api/db', payload, (data) => ({
    data,
    type: 'getPieData',
  }))
}

export function getVisualDate(payload = {}) {
  return network.GET('/api/status', payload, (data) => ({
    data,
    type: 'getVisualDate',
  }))
}

export function getWavy(payload = {}) {
  return network.GET('/api/wavy', payload, (data) => ({
    data,
    type: 'getWavy',
  }))
}
