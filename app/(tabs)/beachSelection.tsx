import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SearchBar} from '@rneui/themed';

export default class BeachSelectionPage extends Component {
  state = {
    search: ''
  }

  updateSearch = (newSearch: string) => {
    this.setState({ search: newSearch });
  };

  render() {
    return (
  <View style={styles.bigContainer}>
    <View style={styles.searchBarArea}>
      <View style={styles.backButton}>

      </View>
      <SearchBar
        containerStyle={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
      <View style={styles.littleFriend}>

      </View>
    </View>
    <View style={styles.beachBoxArea}>
      <View style={styles.beachBox}>
        <Text></Text>
      </View>
    </View>
    <View style={styles.beachBoxArea}>
      <View style={styles.beachBox}>

      </View>
    </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  searchBarArea: {
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  searchBar: {
    flex: 4
  },
  backButton: {
    flex: 1,
    backgroundColor: 'purple'
  },
  littleFriend: {
    flex: 1,
    backgroundColor: 'green'
  },
  beachBoxArea: {
    flex: 2,
    backgroundColor: 'white'
  },
  beachBox: {
    height: '90%',
    width: '80%',
    backgroundColor: 'black',
    margin: 'auto',
    padding: '2%'
  }
})