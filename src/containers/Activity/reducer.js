const initialState = {
  attackTrafficData: [],
}

const reducers = {
  getAttackTrafficData: (state, action) => ({ ...state, attackTrafficData: action.data.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
