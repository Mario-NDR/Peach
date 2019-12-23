import network from 'Utils/network'
import { history } from 'Src/Main'
import api from 'Constants/api'

export function login(payload) {
  sessionStorage.setItem('userName', payload)
  return {
    data: payload,
    type: 'login',
  }
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
