import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Card, CardContent, Typography, CardActions, Button as MButton } from '@mui/material';
import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Autocomplete, TextField } from '@mui/material';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import FrogIcon from '@/components/initial_setup/FrogIcon';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Recommended beach:
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Southwold Beach
      </Typography>
      <Typography variant="body2">
        Rating: 4.8
        <StarRateIcon fontSize="small" />
      </Typography>
    </CardContent>
    <CardActions>
      <MButton size="small" onClick={() => router.push('/beachpage')}>View weather</MButton>
    </CardActions>
  </React.Fragment>
);

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputChange = (event, value) => {
    setInputValue(value.toString().toLowerCase());
  };

  const handleSelectOption = (event, value) => {
    if (value === 'Southwold Beach') {
      router.push('/beachpage');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      router.push('/beachpage');
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Frog icon */}
        <View style={styles.frogIcon}>
          <FrogIcon />
        </View>

        {/* Autocomplete component */}
        <View style={styles.container}>
          <Autocomplete
            freeSolo
            options={['Southwold Beach']}
            value={inputValue}
            onInputChange={handleInputChange}
            filterOptions={(options, state) =>
              state.inputValue.toLowerCase().startsWith('s') ? options : []
            }
            onChange={handleSelectOption}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter a beach!"
                variant="standard"
                onKeyPress={handleKeyPress}
              />
            )}
            style={styles.searchBar}
          />
        </View>

        {/* Recommended beach */}
        <View style={styles.recommendation}>
          <Card variant="outlined">{card}</Card>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frogIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  container: {
    width: '80%',
    marginTop: 20,
  },
  searchBar: {
    width: '100%',
  },
  recommendation: {
    width: '80%',
    marginTop: 20,
  }
});
