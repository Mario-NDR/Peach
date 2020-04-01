const initialState = {
  rules: [],
  data: '',
}

const reducers = {
  getRules: (state, action) => ({ ...state, rules: action.data.rules }),
  postRules: (state, action) => ({ ...state, data: action.data })
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
