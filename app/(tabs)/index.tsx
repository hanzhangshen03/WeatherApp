import { Image, StyleSheet, Platform, View, ImageBackground } from 'react-native';
import { DateTime } from '@/components/initial_setup/DateTimeComponent';
import SearchBox from '@/components/initial_setup/SearchBox';
import { ScrollView } from 'react-native-gesture-handler';
import littleFriend from '@/assets/images/Frog.png';
import background from '@/assets/images/background.avif';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>

      <ScrollView style={styles.scroll}>

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
        <View style={styles.dateTime}>
          <DateTime textColor={'white'}></DateTime>
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
  littleFriend: {
    height: '100%',
  },
  imagebox: {
    height: '30%',
    width: '100%'
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
