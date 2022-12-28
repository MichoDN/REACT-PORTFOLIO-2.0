import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ComponentTitle from '../microComponents/ComponentTitle';
import { Knowledges } from '../microComponents/KnowledgesList';


const Knowledge = () => {
    const gridSX = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        aspectRatio: '1/1',
        borderBottom: '3px solid',
        borderColor: 'primary.main'
    }
    return (
        <Stack className='componentContent'>
            <ComponentTitle label='Knowledge' />
            <Box sx={{ overflowY: 'scroll', marginTop: '2rem' }} >
                <Grid container sx={{ width: '51rem', p: 3 }} rowGap={6} columnGap={7}>
                    {Knowledges.map((tech) => (
                        <Grid
                            item
                            key={tech.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                aspectRatio: '1/1',
                                borderBottom: '3px solid',
                                borderColor: 'primary.main',
                                bgcolor:"primary.lowContrast",
                                color:"text.primary"
                            }}
                            xs={3.4}
                        >
                            <img src={tech.img} style={{ height: '80%', objectFit: 'contain' }} />

                            <Typography variant='h5'>{tech.name}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default Knowledge;