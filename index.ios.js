/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import {
  AppRegistry
 } from 'react-native'

import Home from './component/home/main'

import List from './component/list/main'

import { StackNavigator } from 'react-navigation'

const RNwebApp = StackNavigator({

  Home: { screen: Home },

  List: { screen: List }

})



AppRegistry.registerComponent('RNwebApp', () => RNwebApp);
