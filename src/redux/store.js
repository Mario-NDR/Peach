import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import createReducer from './reducers'
// import promiseMiddleware from './middleware'

const reduxLogger = createLogger()

export default (history, initialState = {}) => {
  const store = createStore(
    createReducer(),
    initialState,
    compose(
      process.env.NODE_ENV === 'development'
        ? applyMiddleware(thunk, reduxLogger, routerMiddleware(history))
        : applyMiddleware(thunk, routerMiddleware(history)),
      // ? applyMiddleware(thunk, promiseMiddleware, reduxLogger, routerMiddleware(history))
      // : applyMiddleware(thunk, promiseMiddleware, routerMiddleware(history)),

      process.env.NODE_ENV === 'development'
        && typeof window === 'object'
        && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  )

  store.asyncReducers = {}

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers', () => store.replaceReducer(createReducer()))
    }
  }

  return store
}
