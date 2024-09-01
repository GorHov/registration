import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

function HomePage() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      p={3}
    >
      <Typography variant="h4" component="h1">
        {t('hello_home_page')}
      </Typography>
    </Box>
  );
}

export default HomePage;
