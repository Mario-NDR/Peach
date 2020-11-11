export function compact(object) {
  const result = {}
  _.forIn(object, (value, key) => {
    let hasValue = true

    if (value === null || value === undefined || value === '') {
      hasValue = false
    }

    if (_.isArray(value) && _.isEmpty(value)) {
      hasValue = false
    }

    if (_.isObject(value) && _.isEmpty(value)) {
      hasValue = false
    }

    if (key.indexOf('__') === 0) {
      hasValue = false
    }

    if (hasValue) {
      result[key] = value
    }
  })
  return result
}

export function parseQueryString(params) {
  let qs = []
  if (_.isString(params)) {
    return params
  }
  if (!params || _.isEmpty(params)) {
    return ''
  }
  if (params) {
    Object.keys(params).map((key) => {
      const value = params[key]
      if (value !== null && value !== undefined) {
        qs.push(`${key}=${encodeURIComponent(params[key])}`)
      }
    })
  }
  if (qs.length > 0) {
    qs = [ ...new Set(qs) ]
    qs.sort()
    return `?${qs.join('&')}`
  }
  return ''
}
