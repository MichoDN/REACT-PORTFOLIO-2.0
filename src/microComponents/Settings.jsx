import { FormControlLabel, IconButton, Menu, MenuItem, Switch } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';

export const Settings = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleMenu = event => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const [darkTheme, toggleDarkTheme] = useState(false)
    const handleDarkTheme = ev => toggleDarkTheme(ev.target.checked)
    return (
        <>
            <IconButton
                onClick={handleMenu}
                sx={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '2.5rem'
                }}
            >
                <SettingsIcon sx={{ transform: 'scale(2.6)' }} />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                transformOrigin={{vertical:'top', horizontal:'right'}}
            >
                <MenuItem>
                    <FormControlLabel
                        label="Dark Mode"
                        control={
                            <Switch
                                checked={darkTheme}
                                onChange={handleDarkTheme}
                                disabled
                            />
                        }
                    />
                </MenuItem>
            </Menu>
        </>
    );
};