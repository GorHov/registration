import React from 'react';
import { Box, Typography } from '@mui/material';

const AuthBox = ({ title, children }) => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        mt: 5,
        p: 3,
        borderRadius: 5,
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default AuthBox;
