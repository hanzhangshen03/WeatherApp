import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, StyleSheet, TextInput } from 'react-native';

export default function SearchBar() {
  const [text, setText] = React.useState('');

  const handleInputChange = (input: React.SetStateAction<string>) => {
    setText(input);
  }

  const handleSubmit = () => {
    alert(`You entered: ${text}`);
    // navigation.navigate(text)
  }
  return (
    <div style={styles.division}>      
      
      <LocationOnIcon></LocationOnIcon>
      {/* <Autocomplete
        style = {{
            width: '90%'
        }}
        freeSolo
        disableClearable
        options={locations.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter a location to get started"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        
      /> */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </div>
      
  );
}

const handleInput = () => {
    
}

const styles = StyleSheet.create({
    division: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
})

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const locations = [
  { title: 'cambridge'}
];
