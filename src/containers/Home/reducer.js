const initialState = {
  mapDetail: [],
  securityBrain: {},
  loadingModal: 0,
  loadingTable: 0,
}

const reducers = {
  getMapDetailData: (state, action) => ({ ...state, mapDetail: action.data.data, loadingTable: Date.now() }),
  postSecurityBrain: (state, action) => ({ ...state, securityBrain: action.data, loadingModal: Date.now() }),
  clearMapDetailData: (state) => ({ ...state, mapDetail: [] }),
}

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
