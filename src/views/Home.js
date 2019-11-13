import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { ArtistList } from './../components'
import { getMusicData } from './../utils/api-client'


export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: []  
    }
  }
  
  componentDidMount() {
    getMusicData()
      .then(data => this.setState({ artist: data }))
      .catch(err => {
        console.warn(err.message)
      })
  }

  render() {
    const artists = this.state.artist

    return (
      <View style={StyleSheet.container}>
        {[] && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  }
})
