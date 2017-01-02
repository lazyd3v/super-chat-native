import React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router } from 'react-native-router-flux'

import AppRoutes from './routes'

import rootReducer from './redux'

const RouterWithRedux = connect()(Router)

const middleware = [
  thunk
]

const store = compose(
  applyMiddleware(...middleware)
)(createStore)(rootReducer)

export default function AppContainer () {
  return (
    <Provider store={store}>
      <RouterWithRedux scenes={AppRoutes} />
    </Provider>
  )
}
