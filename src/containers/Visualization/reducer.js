const initialState = {
  pieData: {},
  visualDate: {},
  loadingPie: 0,
}

const reducers = {
  getPieData: (state, action) => ({ ...state, pieData: action.data, loadingPie: Date.now() }),
  getVisualDate: (state, action) => ({ ...state, visualDate: action.data }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
