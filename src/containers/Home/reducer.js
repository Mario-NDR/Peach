const initialState = {
  mapDetail: [],
}

const reducers = {
  getMapDetailData: (state, action) => ({ ...state, mapDetail: action.data.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
