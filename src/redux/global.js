// import network from 'Utils/network'

const initialState = {
  company: null,
}

export const actions = {
  loadCompany: () => ({
    type: 'loadGlobalCompany',
  }),
}

const reducers = {
  loadGlobalCompanySuccess: (state, action) => ({ ...state, company: action.data }),
}

export default function global(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
