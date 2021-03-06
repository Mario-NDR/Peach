import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import mapReducer from 'Containers/Home/reducer'
import loginReducer from 'Containers/Login/reducer'
import rulesReducer from 'Containers/Activity/Rules/reducer'
import visualReducer from 'Containers/Visualization/reducer'
import settingReducer from 'Containers/Setting/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    mapReducer,
    rulesReducer,
    loginReducer,
    visualReducer,
    settingReducer,

    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
