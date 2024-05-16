import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function BeachSelection () {
  return (
  <div style={styles.divthing}>
  <View style={styles.hello}>
  <Text style={styles.hello}>Hello World :3</Text>
  </View>
  <View style={styles.hello2}>
  <Text style={styles.hello2}>Hello World 2 :3</Text>
  </View>
  </div>
  );
}

const styles = StyleSheet.create({
  divthing: {
    height: '100%'
  },
  hello: {
    alignItems: 'center',
    color: 'pink',
    backgroundColor: 'green',
    height: '60%'
  },

  hello2: {
    alignItems: 'center',
    color: 'pink',
    backgroundColor: 'cyan',
    height: '40%'
  }
})