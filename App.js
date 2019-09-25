/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './src/screens/home';
import Cart from './src/screens/cart';

import {createBottomTabNavigator} from 'react-navigation-tabs';

class App extends Component {
  render() {
    return <HomeNavigator />;
  }
}

const HomeNavigator = createSwitchNavigator({
  Welcome: Home,
  Cart: Cart,
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Cart: Cart,
});

export default createAppContainer(AppNavigator);
