import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutocompleteInput = ({ name, value, onChange, options, error, label }) => (
  <Autocomplete
    name={name}
    value={value}
    onChange={onChange}
    options={options}
    renderInput={(params) => (
      <TextField
        {...params}
        label={error || label}
        error={!!error}
        fullWidth
      />
    )}
    disableCloseOnSelect
  />
);

export default AutocompleteInput;
