/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

    page1:{
    flex: 1,
    backgroundColor: 'red',
    },

    page2:{
    flex: 1,
        backgroundColor:'green',
    },
});

