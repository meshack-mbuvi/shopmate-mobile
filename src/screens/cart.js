import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import styles from '../styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Shopping cart</Text>
        </View>
      </View>
    );
  }
}
