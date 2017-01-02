import { combineReducers } from 'redux'

const testReducer = (state = {}, action) => {
  return state
}

const appReducer = combineReducers({ testReducer })

export default appReducer
