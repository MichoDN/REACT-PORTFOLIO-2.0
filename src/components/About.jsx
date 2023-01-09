import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ComponentTitle from '../microComponents/ComponentTitle';
import { StyledContent } from '../themes';

const About = () => {
    const [animationAppears, setAnimationAppears] = useState(false);
    useEffect(() => setAnimationAppears(true))
    return (
        <StyledContent spacing={6} className='componentContent' sx={{opacity: animationAppears && 1}} >
            <ComponentTitle label='About me' />

            <Typography variant='h3' sx={descriptionSX} >
                I'm Michael Decena, <br />
                a fullstack developer <br />
                from Dominican Republic <br />
                Welcome to my portfolio.
            </Typography>

            <Stack alignItems='center' spacing={3}>
                <Typography variant='h4' color="text.primary" >SoftSkills:</Typography>

                <Grid container columnGap={{ xs: 1, sm: 1.9, md: 3 }} rowGap={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                    {softSkills.map((softSkill) => (
                        <Grid item key={softSkill}
                            xs={12} sm={5.8}
                            sx={{
                                p: 1,
                                bgcolor: "primary.lowContrast",
                                color: "text.primary",
                                textAlign: 'center',
                                borderBottom: '3px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            {softSkill}
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </StyledContent>
    );
};


const softSkills = [
    'Great analytic skills',
    'Adaptability',
    'Great willing to help, learn and teach',
    'Team work and good communication'
]

const descriptionSX = {
    borderLeft: '4px solid',
    borderColor: 'primary.main',
    px: 3,
    color: "text.primary",
    fontSize: {
        xs: "1.8rem",
        sm: "1.9rem",
        md: "2.9rem",
        lg: "2.9rem",
    }
}

export default About;