import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Storage from '../components/storage'

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Storage />
      </View>
    )
  }
}