import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class Component2 extends Component {
  onPress1() {
    console.log('Pressed View 1');
  }
  onPress2() {
    console.log('Pressed View 2');
  }
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
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPress1}
            style={styles.v1}
            underlayColor="blue">
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue',
  },
  myText: {
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    height: 100,
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  vText: {
    color: 'white',
  },
});

AppRegistry.registerComponent('Component2', () => Component2);
