import network from 'Utils/network'
// import api from 'Constants/api'

export function getRules(payload = {}) {
  return network.GET('/api/rules', payload, (data) => ({
    data,
    type: 'getRules',
  }))
}
