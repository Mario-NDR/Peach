const initialState = {
  pieData: {},
}

const reducers = {
  getPieData: (state, action) => ({ ...state, pieData: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
