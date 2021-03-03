import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Camera from '../components/camera'

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Camera />
      </View>
    )
  }
}