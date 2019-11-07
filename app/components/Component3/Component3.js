import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello',
    };
  }
  onChangeText(value) {
    this.setState({
      textValue: value,
    });
  }
  onSubmitEditing() {
    console.log('input submitted');
  }
  render() {
    let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={value => this.onChangeText(value)}
          onSubmitEditing={this.onSubmitEditing}
        />
        <Text>{this.state.textValue}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);
