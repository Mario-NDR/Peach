import network from 'Utils/network'
// import api from 'Constants/api'

export function getMapDetailData(payload = {}) {
  return network.GET('/api/map', payload, (data) => ({
    data,
    type: 'getMapDetailData',
  }))
}

// 安全大脑
export function postSecurityBrain(payload = {}) {
  return network.POST('/api/vulsearch', payload, (data) => ({
    data,
    type: 'postSecurityBrain',
  }))
}

// 置空入侵防御列表
export function clearMapDetailData() {
  return {
    type: 'clearMapDetailData'
  }
}
