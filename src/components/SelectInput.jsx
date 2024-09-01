import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox, ListItemText, Typography } from '@mui/material';

const SelectInput = ({ name, value, onChange, options, error, label, multiselect }) => (
  <FormControl fullWidth error={!!error}>
    <InputLabel>{error || label}</InputLabel>
    <Select
      name={name}
      multiple={multiselect}
      value={value}
      onChange={onChange}
      input={<OutlinedInput label={label} />}
      renderValue={(selected) =>
        Array.isArray(selected) ? selected.join(', ') : selected
      }
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {multiselect && (
            <Checkbox checked={value.indexOf(option) > -1} />
          )}
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectInput;
