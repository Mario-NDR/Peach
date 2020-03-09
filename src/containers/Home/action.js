import network from 'Utils/network'
// import api from 'Constants/api'

export function getMapDetailData(payload = {}) {
  return network.GET('/api/map', payload, (data) => ({
    data,
    type: 'getMapDetailData',
  }))
}
