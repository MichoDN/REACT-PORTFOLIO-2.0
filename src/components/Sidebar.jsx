import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowDimensions from '../hooks/useWindowDimensions';

const drawerItems = [
  { name: 'ABOUT ME', icon: <AccountCircleIcon /> },
  { name: 'KNOWLEDGE', icon: <SchoolIcon /> },
  { name: 'PORTFOLIO', icon: <BusinessCenterIcon /> },
  { name: 'CONTACT', icon: <EmailIcon /> }
]


const Sidebar = ({ setCurrentComp, currentComp }) => {
  const { width } = useWindowDimensions()
  useEffect(() => { if (width < 1550) { setOpen(false) } }, [width])
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      variant='permanent'
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          overflow: 'hidden',
          width: open ? '240px' : 'auto',
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: open ? 'end' : 'center',
        transform: 'scale(1.2)',
        my: '1rem',
        width: open ? '90%' : '100%'
      }}>
        <IconButton onClick={() => { if (width >= 1150) { setOpen(!open) } }}>
          {open ? <ChevronLeftIcon sx={{ transform: 'scale(1.2)' }} /> : <MenuIcon sx={{ transform: 'scale(1.2)' }} />}
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ marginTop: 2, p: 0, overflow: 'hidden' }}>
        {drawerItems.map((item) => (
          <ListItem key={item.name}
            disablePadding
            sx={{ display: 'block', p: '0.5rem 0rem 0.5rem 0rem' }}
          >
            <ListItemButton
              sx={{
                minHeight: 50,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => setCurrentComp(item.name)}
            >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                transform: 'scale(1.5)',
                color: currentComp == item.name && 'primary.main'
              }}>
                {item.icon}
              </ListItemIcon >
              <ListItemText
                primary={item.name}
                sx={{
                  display: open ? "block" : "none"
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;