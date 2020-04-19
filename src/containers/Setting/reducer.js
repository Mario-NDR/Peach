const initialState = {
  setting: {},
  version: '',
  dbStatus: ''
}

const reducers = {
  getSetting: (state, action) => ({ ...state, setting: action.data }),
  getVersion: (state, action) => ({ ...state, version: action.data }),
  getDbStatus: (state, action) => ({ ...state, dbStatus: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
