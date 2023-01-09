import {Box, SpeedDial, SpeedDialAction } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/material/styles';
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
      icon={<StyledSettingsIcon> <SettingsIcon/> </StyledSettingsIcon>}
    >
      <SpeedDialAction icon={<DarkModeIcon/>} onClick={toggleDarkTheme}/>
    </SpeedDial>
    );
};

const StyledSettingsIcon = styled(Box)(({ theme }) => ({
  transition: theme.transitions.create(['transform'], { duration: 1000 }),
  height:"100%",
  display:"flex",
  alignItems:"center",
  transform: "scale(1.5)"
}))