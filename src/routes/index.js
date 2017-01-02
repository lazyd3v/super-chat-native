import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import LoginView from '../views/LoginView'

export default Actions.create(
  <Scene key='root'>
    <Scene key='login' component={LoginView} hideNavBar={true}/>
  </Scene>
)