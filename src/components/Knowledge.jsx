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
                <Grid container sx={{ width: {xs: "18rem", sm:"40rem", md:"51rem"}, p: 2, height:"100%" }} rowGap={6} columnGap={{xs:0, sm:7,md:5}}>
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
                            xs={12}
                            sm={5}
                            md={3.4}
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