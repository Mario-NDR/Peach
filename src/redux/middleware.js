export default function promiseMiddleware() {
  return next => (action) => {
    const { promise, type, ...rest } = action

    if (!promise) {
      return next(action)
    }

    const REQUEST = `${type}_Request`
    const SUCCESS = `${type}_Success`
    const FAILURE = `${type}_Failure`

    next({ ...rest, type: REQUEST })

    return promise
      .then((response) => {
        const { data } = response
        next({ ...rest, data, type: SUCCESS })
        return true
      })
      .catch((error) => {
        console.error(error)
        next({ ...rest, error, type: FAILURE })
        return false
      })
  }
}
