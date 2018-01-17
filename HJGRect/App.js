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
              selected={this.state.selectedTab === 'tab_0'}
              selectedTitleStyle={{color:'red'}}
              title="首页"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tab_0' })}>
            <View style={styles.page0}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tab_1'}
              selectedTitleStyle={{color:'yellow'}}
              title="购彩"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'tab_1' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tab_2'}
              selectedTitleStyle={{color:'blue'}}
              title="开奖"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'tab_2' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tab_3'}
              selectedTitleStyle={{color:'orange'}}
              title="聊天"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'orange'}]} source={require('./res/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'tab_3' })}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tab_4'}
              selectedTitleStyle={{color:'red'}}
              title="我的"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'tab_4' })}>
            <View style={styles.page4}></View>
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

    page0:{
    flex: 1,
    backgroundColor: 'red',
    },

    page1:{
    flex: 1,
        backgroundColor:'green',
    },
    page2:{
        flex: 1,
        backgroundColor:'blue',
    },
    page3:{
        flex: 1,
        backgroundColor:'orange',
    },
    page4:{
        flex: 1,
        backgroundColor:'green',
    },
    image:{
    width:22,
        height:22,
    }
});

