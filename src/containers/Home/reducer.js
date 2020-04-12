const initialState = {
  mapDetail: [],
  securityBrain: {},
}

const reducers = {
  getMapDetailData: (state, action) => ({ ...state, mapDetail: action.data.data }),
  postSecurityBrain: (state, action) => ({ ...state, securityBrain: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
