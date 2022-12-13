import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

 const About = () => {
    const softSkills = [
        'Great analytic skills',
        'adaptability',
        'Great willing to help, learn and teach',
        'Team work and good communication'
    ]
    return (
        <Stack spacing={6} className='componentContent' >
            <Typography variant='h2' className='componentTitle'>
                Who am I?
            </Typography>
            <Typography variant='h3' sx={{ borderLeft: '4px lightCoral solid', px: 3 }}>
                I'm Michael Decena, <br />
                a fullstack developer. <br />
                Welcome to my portfolio.
            </Typography>
            <Stack alignItems='center' spacing={3}>
                <Typography variant='h4'>SoftSkills:</Typography>
                <Grid container columnGap={3} rowGap={3} sx={{ p: 1 }}>
                    {softSkills.map((softSkill) => (
                        <Grid
                            key={softSkill}
                            item
                            xs={5.8}
                            sx={{
                                textAlign: 'center',
                                borderLeft: '3px solid lightCoral',
                                bgcolor:'#F0D0D0',
                                boxShadow: '2px 2px 4px #D4D4D4',
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