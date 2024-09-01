import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import visibilityIconUrl from '../assets/show-password.svg';

const PasswordInput = ({ name, value, onChange, showPassword, handleClickShowPassword, handleMouseDownPassword, error }) => (
  <FormControl fullWidth variant="outlined" error={!!error}>
    <InputLabel htmlFor={`outlined-adornment-${name}`}>
      {error || name}
    </InputLabel>
    <OutlinedInput
      id={`outlined-adornment-${name}`}
      type={showPassword ? 'text' : 'password'}
      value={value}
      name={name}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={`toggle ${name} visibility`}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            <img src={visibilityIconUrl} alt={`toggle ${name} visibility`} />
          </IconButton>
        </InputAdornment>
      }
      label={error || name}
      error={!!error}
    />
  </FormControl>
);

export default PasswordInput;
