import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ComponentTitle from '../microComponents/ComponentTitle';

const softSkills = [
    'Great analytic skills',
    'adaptability',
    'Great willing to help, learn and teach',
    'Team work and good communication'
]

const About = () => {
    return (
        <Stack spacing={6} className='componentContent' >
            <ComponentTitle label='Who am I?' />
            <Typography
                variant='h3'
                sx={{
                    borderLeft: '4px solid',
                    borderColor: 'primaryBorder',
                    px: 3,
                    color: 'text'
                }}
            >
                I'm Michael Decena, <br />
                a fullstack developer. <br />
                Welcome to my portfolio.
            </Typography>
            <Stack alignItems='center' spacing={3}>
                <Typography variant='h4' color={'text'}>SoftSkills:</Typography>
                <Grid container columnGap={3} rowGap={3} sx={{ p: 1 }}>
                    {softSkills.map((softSkill) => (
                        <Grid
                            key={softSkill}
                            item
                            xs={5.8}
                            sx={{
                                textAlign: 'center',
                                borderLeft: '3px solid',
                                borderColor: 'primaryBorder',
                                bgcolor: 'tertiaryBG',
                                boxShadow: '2px 2px 2px #82828294',
                                p: 1
                            }}
                        >
                            {softSkill}
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Stack>
    );
};

export default About;