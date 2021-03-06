const initialState = {
  xxx: {},
}

const reducers = {
  getaboutxxx: (state, action) => ({ ...state, xxx: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
