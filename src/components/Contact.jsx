import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ComponentTitle from '../microComponents/ComponentTitle';
const Contact = () => {

    const iconsFX = { transform: 'scale(2)' }
    const iconButtonsFX = { transform: 'scale(4)', borderRadius: 1 }
    const githubIconFX = { transform: 'scale(1.6)' }
    const gitHubButtonFX = { transform: 'scale(4)' }
    return (
        <Stack className='componentContent'>
        <ComponentTitle label='Contact'/>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10rem', marginTop: '15rem' }}>
                <IconButton sx={iconButtonsFX} href='https://www.facebook.com/profile.php?id=100087621905116'> <FacebookIcon sx={iconsFX} /> </IconButton>
                <IconButton sx={iconButtonsFX} href='https://www.linkedin.com/in/michael-decena/'> <LinkedInIcon sx={iconsFX} /> </IconButton>
                <IconButton sx={iconButtonsFX} href='mailto:michaeldn03@gmail.com'> <EmailIcon sx={iconsFX} /> </IconButton>
                <IconButton sx={gitHubButtonFX} href='https://github.com/MichoDN'> <GitHubIcon sx={githubIconFX} /> </IconButton>
            </Box>
        </Stack>
    );
};

export default Contact;