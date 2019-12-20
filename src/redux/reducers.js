import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import overview from 'Containers/Activity/reducer'
import mapReducer from 'Containers/Home/reducer'
import loginReducer from 'Containers/Login/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    overview,
    mapReducer,
    loginReducer,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
