import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import mapReducer from 'Containers/Home/reducer'
import loginReducer from 'Containers/Login/reducer'
import attackTrafficReducer from 'Containers/Activity/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    mapReducer,
    loginReducer,
    attackTrafficReducer,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
