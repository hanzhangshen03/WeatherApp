import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router'; // Import router from expo-router
import { Card, CardContent, Typography, CardActions, Button as MButton } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Autocomplete, TextField } from '@mui/material';
import { SafeAreaView } from 'react-native-safe-area-context';
import FrogIcon from '@/components/initial_setup/FrogIcon';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // go to beach page
    router.push('/beachpage');
  }

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
        <MButton size="small" onClick={handleSubmit}>View weather</MButton> {/* Updated onClick handler */}
      </CardActions>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Frog icon */}
        <View style={styles.frogIcon}>
          <FrogIcon />
        </View>

        {/* Autocomplete component */}
        <View style={styles.searchBar}>
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
          />
        </View>
      </View>

      {/* Recommended beach */}
      <View style={styles.recommendation}>
        <Card variant="outlined">{card}</Card>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  container: {
    width: '80%',
  },
  searchBar: {
    width: '100%',
  },
  recommendation: {
    width: '80%',
    marginTop: 20,
  },
  frogIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default SearchBar;
