import { Grid, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import ComponentTitle from '../microComponents/ComponentTitle';
import { Projects } from '../microComponents/ProjectsList';

const Portfolio = () => {
    const { height, width } = useWindowDimensions();
    const listSX = {
        marginTop: "3rem",
        width: 'fit-content',
        gap: '1rem',
        display: 'grid',
        gridTemplateColumns: width > 1465 ? '1fr 1fr' : '1fr',
        p: 0,
    }
    const listItemSX = {
        border: '3px solid',
        borderColor: 'primaryBorder',
        width: '34rem',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: "1rem"
    }
    return (
        <Stack className='componentContent'>
            <ComponentTitle label='Projects'/>
            <Grid container sx={listSX}>
                {Projects.map((project) => (
                    <Grid item sx={listItemSX} key={project.name}>
                        <Stack sx={{ width: '15rem', height: '9rem' }}>
                            <Typography variant='h5'color='text' mb={'0.25rem'}>{project.name}</Typography>
                            <Typography variant='body2' color='text'> {project.description} </Typography>
                        </Stack>
                        <a href={project.link}> <img src={project.img} className='projectImg' /></a>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Portfolio;