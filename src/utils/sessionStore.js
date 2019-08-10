import aes256 from 'aes256'
import _ from 'lodash'

const aesKey = '3h0uchi1ian9bakunjinka0k0uzh0n9jihutan9tan9tan9'

function encrypt(str) {
  if (!str) return
  return aes256.encrypt(aesKey, str)
}

function decrypt(str) {
  if (!str) return
  return aes256.decrypt(aesKey, str)
}

function toStr(arg) {
  if (!arg) {
    return ''
  }
  if (_.isString(arg)) {
    return arg
  }
  if (_.isObject(arg)) {
    return JSON.stringify(arg)
  }
  console.error(`can't parse string: ${arg}`)
  return ''
}

function toObj(str) {
  let r = str
  try {
    r = JSON.parse(str)
  } catch (error) {
    // console.warn(`can't parse json: str ${error}`)
  }
  return r
}

export function setSessionStore(obj) {
  if (!obj) {
    return
  }
  const key = Object.keys(obj)[0]
  let value = obj[Object.keys(obj)[0]]
  value = toStr(value)
  const strValue = encrypt(value)
  sessionStorage.setItem(key, strValue)
}

export function getSessionStore(key) {
  const value = sessionStorage.getItem(key)
  const aesValue = decrypt(value)
  return toObj(aesValue)
}

export function clearSessionStore() {
  sessionStorage.clear()
}

export default {
  setItem: setSessionStore,
  getItem: getSessionStore,
  clearSessionStore,
}
