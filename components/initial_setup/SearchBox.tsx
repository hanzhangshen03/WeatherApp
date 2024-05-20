import {useState} from 'react';
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
    router.push('/mainPage');
  }
  return (
    <div style={styles.division}>

      <LocationOnIcon style={{ color: 'white' }}></LocationOnIcon>

      <TextInput
        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
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
    width: '100%'
  },
})

const locations = [
  { title: 'cambridge' }
];