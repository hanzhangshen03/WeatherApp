import { Image, StyleSheet, Platform } from 'react-native';
import { Button } from '@mui/material';
import { DateTime } from '@/components/initial_setup/DateTimeComponent';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchBox from '@/components/initial_setup/SearchBox';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.page}>
      {/* searchbox component */}
      <ThemedView style={styles.searchBox}>
        <SearchBox></SearchBox>
      </ThemedView>

      {/* date time component */}
      <ThemedView style = {styles.dateTime}>
        <DateTime></DateTime>
      </ThemedView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  dateTime: {
    alignItems: 'center'
  },
  searchBox: {
    alignItems: 'center',
    paddingBottom: 100
  },
  page: {
  }
});
