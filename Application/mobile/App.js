import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import api from "./api";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import CameraScreen from './screens/CameraScreen';
import StorageScreen from './screens/StorageScreen';

window.myapi = api;


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  },
  Camera: {
    screen: CameraScreen
  },
  Storage: {
    screen: StorageScreen
  }
},{
        initialRouteName: "Home"
});
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});