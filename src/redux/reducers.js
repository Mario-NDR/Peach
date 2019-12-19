import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import overview from 'Containers/Activity/reducer'
import mapReducer from 'Containers/Home/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    overview,
    mapReducer,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
