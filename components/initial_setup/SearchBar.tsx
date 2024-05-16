// SearchBar.tsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const locations = [{ title: 'Cambridge' }];

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
    setInputValue(value);
  };


  return (
    <div>
      <LocationOnIcon />
      <Autocomplete
        style={{ width: '90%' }}
        freeSolo
        disableClearable
        options={locations.map((option) => option.title)}
        onChange={handleInputChange}
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
      />
    </div>
  );
}

export default SearchBar;