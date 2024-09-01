import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import useFormValidation from '../../hooks/useFormValidation';
import AuthBox from '../AuthBox';
import { validateSignIn } from '../../utils/validate';

function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState('');

  const { values, errors, handleChange, isSubmitting } = useFormValidation(
    { email: '', password: '' },
    validateSignIn
  );

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      
      const user = data.find(user => user.email === values.email && user.password === values.password);
      
      if (user) {
        navigate('/home');
      } else {
        setApiError(t('invalid_email_or_password'));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setApiError(t('error_fetching_data'));
    }
  };

  return (
    <AuthBox title={t('sign_in')}>
      <Box component="div">
        <Box mb={2}>
          <TextField
            fullWidth
            type="email"
            name="email"
            label={errors.email || apiError || t('email')}
            value={values.email}
            onChange={handleChange}
            error={!!errors.email || !!apiError}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            type="password"
            name="password"
            label={errors.password || apiError || t('password')}
            value={values.password}
            onChange={handleChange}
            error={!!errors.password || !!apiError}
          />
        </Box>
        <Button
          onClick={handleSignIn}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          {t('submit')}
        </Button>
      </Box>
      <Box textAlign="center" mt={3}>
        <Typography variant="body2">
          {t('no_account')}{" "}
          <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>
            {t('register_here')}
          </Link>
        </Typography>
      </Box>
    </AuthBox>
  );
}

export default SignIn;
