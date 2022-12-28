import { Typography } from '@mui/material';
import React from 'react';

const ComponentTitle = ({ label }) => {
  return (
    <Typography 
    variant='h2' 
      sx={{
        borderBottom:' 4px solid',
        borderColor:'primary.main',
        color:"text.primary"
      }}
    >
      {label}
    </Typography>
  );
};

export default ComponentTitle;