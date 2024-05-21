import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, StyleSheet, TextInput } from 'react-native';
import { router } from 'expo-router';

export default function SearchBar() {
  const [text, setText] = useState('');

  const handleInputChange = (input: React.SetStateAction<string>) => {
    // get the text from the search bar
    setText(input);
  }

  const handleSubmit = () => {
    // go to main page
    router.push('/mainpage');
  }
  return (
    <div style={styles.division}>
      <TextInput
        style={{ height: 40, borderColor: 'grey', borderWidth: 1, color: 'white' }}
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

const styles = StyleSheet.create({
  division: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10
  },
})