const initialState = {
  userName: '',
}

const reducers = {
  login: (state, action) => ({ ...state, userName: action.data.data }),
}

export default function loginReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
