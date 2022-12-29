import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
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
            <ComponentTitle label='About me' />
            <Typography
                variant='h3'
                sx={{
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    px: 3,
                    color: "text.primary",
                    fontSize: {
                        xs:"1.9rem",
                        sm:"2rem",
                        md:"3rem",
                        lg:"3rem",
                    }
                }}
            >
                I'm Michael Decena, <br />
                a fullstack developer. <br />
                Welcome to my portfolio.
            </Typography>
            <Stack alignItems='center' spacing={3}>
                <Typography variant='h4' color="text.primary" >SoftSkills:</Typography>
                <Grid container columnGap={{xs:1, sm:1.9, md:3}} rowGap={{xs:1, sm:2, md:3}} sx={{ p: 1 }}>
                    {softSkills.map((softSkill) => (
                        <Grid
                            key={softSkill}
                            item
                            xs={12}
                            sm={5.8}
                            sx={{
                                textAlign: 'center',
                                borderBottom: '3px solid',
                                borderColor: 'primary.main',
                                p: 1,
                                bgcolor: "primary.lowContrast",
                                color: "text.primary"
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