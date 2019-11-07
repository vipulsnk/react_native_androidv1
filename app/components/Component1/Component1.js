import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Vipul',
      showName: false,
    };
  }
  render() {
    let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <Text>
          Component1 calling! and the message is {this.props.msg} with name{' '}
          {name}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
