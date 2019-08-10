import network from 'Utils/network'
import { history } from 'Src/Main'
import api from 'Constants/api'

export function login(payload) {
  return network.POST(`${api.v1}/login`, payload, data => {
    if (data.code >= 2000 && data.code < 3000) {
      history.push('/app')
    }
    return {
      data,
      type: 'login',
    }
  })
}

export function logout() {
  return network.POST(`${api.v1}/logout`, null, data => {
    if (data.code >= 2000 && data.code < 3000) {
      history.push('/login')
    }
    return {
      data,
      type: 'logout',
    }
  })
}
