/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/camera';
import GameScreen from './screens/gameScreen';
import Sidebar from './screens/sidebar'


const AppNavigator = DrawerNavigator({
  Home: {screen: HomeScreen},
  Camera: {screen: CameraScreen},
  GameScreen: {screen: GameScreen}
  //Sidebar: {screen: Sidebar}
},
{
}
);
export default class App extends React.Component {
  render(){
    return(
      <AppNavigator />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
