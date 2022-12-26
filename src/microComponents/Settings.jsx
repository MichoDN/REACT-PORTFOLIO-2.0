import {SpeedDial, SpeedDialAction } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

export const Settings = ({toggleDarkTheme}) => {
    
    return (
    <SpeedDial
      ariaLabel='Navigation speed dial' //ariaLabel is mandatory
      sx={{ 
        position: 'fixed',
        bottom: 16, 
        right: 16,
      }}
      icon={<SettingsIcon />}
    >
      <SpeedDialAction icon={<DarkModeIcon sx={{color:'text'}}/>} onClick={toggleDarkTheme}/>
    </SpeedDial>
    );
};