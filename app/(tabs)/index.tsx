import React from 'react';
import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FrogIcon from '@/components/initial_setup/FrogIcon'; // Import the FrogIcon component
import { DateTime } from '@/components/initial_setup/DateTimeComponent';
import SearchBox from '@/components/initial_setup/SearchBox';
import background from '@/assets/images/background.avif';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>

      <ScrollView style={styles.scroll}>

        {/* Frog icon */}
        <View style={styles.frogIcon}>
          <FrogIcon />
        </View>

        {/* searchbox component */}
        <View style={styles.searchBox}>
          <SearchBox />
        </View>

        {/* date time component */}
        <View style={styles.dateTime}>
          <DateTime textColor={'white'} />
        </View>
      </ScrollView>

      {/* background image */}
      <ImageBackground source={background} style={[styles.background, { zIndex: -1 }]} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dateTime: {
    alignItems: 'center',
    height: '30%',
    paddingTop: 20
  },
  searchBox: {
    alignItems: 'center'
  },
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  imagebox: {
    height: '30%',
    width: '100%'
  },
  frogIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  page: {
    height: 600
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});