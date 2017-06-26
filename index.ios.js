
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import {
  AppRegistry
 } from 'react-native'

import Home from './src/container/index'

import City from './src/container/city'

import { StackNavigator } from 'react-navigation'

const RNwebApp = StackNavigator({

  Home: { screen: Home },

  City: { screen: City }

})



AppRegistry.registerComponent('RNwebApp', () => RNwebApp);
