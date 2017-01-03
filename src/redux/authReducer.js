import { createReducer } from 'redux-act'

import { authenticate } from '../actions/auth'

const initialState = { 
  token: null, 
  user: {} 
}

  export default createReducer({ 
  [authenticate]: (state, payload) => { return { ...state, ...payload } } 
}, initialState) 
