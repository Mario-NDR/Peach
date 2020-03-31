const initialState = {
  rules: [],
}

const reducers = {
  getRules: (state, action) => ({ ...state, rules: action.data.rules }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
