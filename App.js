import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'
import {
  Home as HomeView,
  Login as LoginView, 
  ArtistDetail as ArtistDetaillView
} from './src/views'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar></Scene>
    <Scene key="home" component={HomeView} hideNavBar></Scene>
    <Scene key="artistDetail" component={ArtistDetaillView} hideNavBar={false}></Scene>
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Router scenes={scenes} sceneStyle={styles.container}></Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
})
