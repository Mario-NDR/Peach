import network from 'Utils/network'
// import api from 'Constants/api'

export function getMapDetailData(payload = {}) {
  // return network.GET(`${api.v1}/alert/top/trigger_count`, payload, (data) => ({
  return network.GET('/api/map', payload, (data) => ({
    data,
    type: 'getMapDetailData',
  }))
}
