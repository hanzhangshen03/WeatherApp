import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FrogIcon from '@/components/initial_setup/FrogIcon'; // Import the FrogIcon component
import { DateTime } from '@/components/initial_setup/DateTimeComponent';
import background from '@/assets/images/background.avif';
import { Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputChange = (event, value) => {
    setInputValue(value.toString().toLowerCase());
  };

  const handleSelectOption = (event, value) => {
    if (value === 'Cambridge') {
      router.push('/mainpage');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      router.push('/mainpage');
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.scroll}>

        {/* Frog icon */}
        <View style={styles.frogIcon}>
          <FrogIcon />
        </View>

        {/* Autocomplete component */}
        <View style={styles.container}>
          <Autocomplete
            freeSolo
            options={['Cambridge']}
            value={inputValue}
            onInputChange={handleInputChange}
            filterOptions={(options, state) => 
              state.inputValue.toLowerCase().startsWith('c') ? options : []
            }
            onChange={handleSelectOption}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="Enter a location!" 
                variant="standard" 
                onKeyPress={handleKeyPress}
              />
            )}
            style={styles.searchBar}
          />
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
  page: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  frogIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBar: {
    width: '80%',
  },
  dateTime: {
    alignItems: 'center',
    height: '30%',
    paddingTop: 20,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
