import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '@rneui/themed';

export default class BeachSelectionPage extends Component {
  state = {
    search: ''
  }

  updateSearch = (search: string) => {
    this.setState({ search });
  };

  render() {
    return (
  <View style={styles.bigContainer}>
    <View style={styles.searchBarArea}>
      <View style={styles.backButton}>

      </View>
      <SearchBar
        style={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
      <View style={styles.littleFriend}>

      </View>
    </View>
    <View style={styles.beachBoxArea}>

    </View>
    <View style={styles.beachBoxArea}>

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
    flex: 1
  },
  littleFriend: {
    flex: 1
  },
  beachBoxArea: {
    flex: 2,
    backgroundColor: 'white'
  },
  beachBox: {

  }
})