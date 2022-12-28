import { Grid, Stack, Typography } from '@mui/material';
import { Projects } from '../microComponents/ProjectsList';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import ComponentTitle from '../microComponents/ComponentTitle';

const Portfolio = () => {
    const { height, width } = useWindowDimensions();
    return (
        <Stack className='componentContent'>
            <ComponentTitle label='Projects' />
            <Grid container sx={{
                marginTop: "3rem",
                width: 'fit-content',
                gap: '1rem',
                display: 'grid',
                gridTemplateColumns: width > 1465 ? '1fr 1fr' : '1fr',
                p: 0,
            }}>
                {Projects.map((project) => (
                    <Grid
                        item
                        sx={{
                            borderBottom: '3px solid',
                            width: '34rem',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderColor: 'primary.main',
                            bgcolor: "primary.lowContrast"

                        }} key={project.name} >
                        <Stack sx={{ width: '15rem', height: '9rem', color: "text.primary" }}>
                            <Typography variant='h5' mb={'0.25rem'}>{project.name}</Typography>
                            <Typography variant='body2' > {project.description} </Typography>
                        </Stack>
                        <a href={project.link}> <img src={project.img} className='projectImg' /></a>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Portfolio;