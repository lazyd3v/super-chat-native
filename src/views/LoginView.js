import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button
} from 'react-native-elements'
import Auth0Lock from 'react-native-lock'

export default class SuperChat extends Component {
  constructor (props) {
    super(props)
    this.onLoginClick = this.onLoginClick.bind(this)
  }

  onLoginClick () {
    const lock = new Auth0Lock({
      clientId: 'detKg5ugNQdbnno1V84YS3RPLja9REkT',
      domain: 'superchat.eu.auth0.com'
    })
    lock.show({}, (err, profile, token) => {
      console.log(err, profile, token)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Perform login' onPress={this.onLoginClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
