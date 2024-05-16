import { Image, StyleSheet, Platform, View } from 'react-native';
import { Button } from '@mui/material';
import { DateTime } from '@/components/initial_setup/DateTimeComponent';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchBox from '@/components/initial_setup/SearchBox';
import SearchBar from '@/components/initial_setup/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';
import littleFriend from '@/assets/images/little_friend.jpg';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.page}>
      {/* little friend component */}
      <div style={styles.imagebox}>
        <Image
          source={littleFriend}
          style={styles.littleFriend}
          resizeMode='contain'></Image>
      </div>

      {/* searchbox component */}
      <View style={styles.searchBox}>
        <SearchBox></SearchBox>
      </View>

      {/* date time component */}
      <View style = {styles.dateTime}>
        <DateTime></DateTime>
      </View>
      
    </ScrollView>
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
  page: {
    display: 'flex',
    flexDirection: 'column'
  },
  littleFriend: {
    height: '100%',
  },
  imagebox: {
    height: '30%',
    width: '100%'
  }
});
