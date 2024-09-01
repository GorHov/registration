import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ name, label, value, onChange, error ,placeholder}) => (
  <TextField
    fullWidth
    name={name}
    label={error || label}
    value={value}
    onChange={onChange}
    error={!!error}
    placeholder={placeholder}
  />
);

export default TextInput;
