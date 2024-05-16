import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function BeachSelection () {
  return (
  <View>
  <Text style={styles.hello}>Hello World :3</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    color: 'pink',
    backgroundColor: 'green'
  }
})