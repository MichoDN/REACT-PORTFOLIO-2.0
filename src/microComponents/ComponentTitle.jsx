import { Typography } from '@mui/material';
import React from 'react';

const ComponentTitle = ({ label }) => {
  return (
    <Typography 
    variant='h2' 
      sx={{
        borderBottom:' 4px solid',
        borderColor:'primaryBorder',
        color:'text'
      }}
    >
      {label}
    </Typography>
  );
};

export default ComponentTitle;