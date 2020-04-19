const initialState = {
  setting: {},
}

const reducers = {
  getSetting: (state, action) => ({ ...state, setting: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
