import { createAction } from 'redux-act'
import { Actions, ActionConst } from 'react-native-router-flux'

export const authenticate = createAction('Authenticate')

export function processAuth0Response (err, profile, token) {
  console.log(profile, token)
  Actions.chat({ type: ActionConst.REPLACE })
  return authenticate({
    token: token.idToken,
    user: {
      nickname: profile.nickname
    }
  })
}
