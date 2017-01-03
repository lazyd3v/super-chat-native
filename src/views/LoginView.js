import React, { Component, PropTypes } from 'react'
import Auth0Lock from 'react-native-lock'
import { connect } from 'react-redux'

// Actions
import { processAuth0Response } from '../actions/auth'

class LoginView extends Component {
  static propTypes = {
    authenticate: PropTypes.func
  }

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  componentDidMount () {
    const { authenticate } = this.props

    const lock = new Auth0Lock({
      clientId: 'detKg5ugNQdbnno1V84YS3RPLja9REkT',
      domain: 'superchat.eu.auth0.com'
    })
    lock.show({}, (err, profile, token) => {
      authenticate(err, profile, token)
    })
  }

  render() {
    return null
  }
}

function mapStateToProps (state) {
  return {
    isLoggedIn: Boolean(state.auth.token)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    authenticate: (...args) => { dispatch(processAuth0Response(...args)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
