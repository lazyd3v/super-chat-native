import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button
} from 'react-native-elements'

export default class SuperChat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Perform login' onPress={() => {}} />
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
