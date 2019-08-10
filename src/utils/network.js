import axios from 'axios'
import Notice from 'Components/Notice'
import { parseQueryString } from 'Utils/object'

function redirectToLogin() {
  Notice({
    data: {
      code: 401,
      message: '请重新登录'
    }
  })
  setTimeout(() => {
    window.location.href = '/login'
  }, 1000)
}

function handleRes(res, dispatch, callback, isGet) {
  const { data } = res
  if (!(isGet && data.code >= 2000 && data.code < 3000)) {
    Notice(res)
  }
  if (data.code === '0000') {
    redirectToLogin()
  } else if (data.code >= 2000 && data.code < 3000) {
    dispatch(callback(data))
  } else if (data.code > 4000 && data.code < 5000) {
    dispatch(callback(data))
  } else {
    console.error(`X-Error: ${data.code} \n ${data.message}`)
  }
}

function handleErr(err) {
  console.error(`X-Error: ${err.message}`)
  console.error(err.response)

  const { data } = err.response

  if (err.response.status === 403 || data.code === '0000') {
    redirectToLogin()
  }
}

class Network {

  GET(api, payload = {}, callback) {
    return (dispatch) => {
      axios.get(`${api}${parseQueryString(payload)}`)
        .then((res) => handleRes(res, dispatch, callback, true))
        .catch((err) => handleErr(err))
    }
  }

  POST(api, payload = {}, callback) {
    return (dispatch) => {
      axios.post(api, payload)
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err))
    }
  }

  PUT(api, payload = {}, callback) {
    return (dispatch) => {
      axios.put(api, payload)
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err))
    }
  }

  DELETE(api, payload = {}, callback) {
    return (dispatch) => {
      axios.delete(api, { data: payload })
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err))
    }
  }
}

export default new Network()
