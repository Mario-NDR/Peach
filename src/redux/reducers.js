import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import overview from 'Containers/Overview/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    overview,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
