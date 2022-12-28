import { Autocomplete, IconButton, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ComponentTitle from '../microComponents/ComponentTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const subjects = ["Software developer", "Other"]
const Contact = () => {
    const [subValue, setSubValue] = useState(subjects[0]);
    const { register, handleSubmit, reset } = useForm();
    const resetValues = () => reset({ email: "", sendersName: "", message: ""}) 

    const iconsFX = { transform: 'scale(2.2)', color: 'primary.main' }
    const iconButtonsFX = { transform: 'scale(1.2)', borderRadius: 1 }

    const submit = (data) => {
        if (subValue) {
            data.subject = subValue;
        } else {
            data.subject = "Other";
        }
        axios.post('https://mailerapp-kjew.onrender.com/api/v1/mailer', data);
        
    }

    return (
        <Stack className='componentContent' spacing={5}>
            <ComponentTitle label='Contact' />
            <form onSubmit={handleSubmit(submit)}>
                <Stack direction={'row-reverse'} columnGap={4}>
                    <Stack sx={{ gap: '1.8rem', marginTop: '0.7rem' }}>
                        <IconButton sx={iconButtonsFX} href='https://www.facebook.com/profile.php?id=100087621905116'> <FacebookIcon sx={iconsFX} /> </IconButton>
                        <IconButton sx={iconButtonsFX} href='https://www.linkedin.com/in/michael-decena/'> <LinkedInIcon sx={iconsFX} /> </IconButton>
                        <IconButton sx={iconButtonsFX} href='mailto:michaeldn03@gmail.com'> <EmailIcon sx={iconsFX} /> </IconButton>
                        <IconButton sx={{ transform: 'scale(1.8)' }} href='https://github.com/MichoDN'>
                            <GitHubIcon sx={{ transform: 'scale(1.4)', color: 'primary.main' }} />
                        </IconButton>
                    </Stack>
                    <Stack spacing={2.5}>
                        <TextField
                            label="What is your name?"
                            variant="filled"
                            sx={{ width: '40rem' }}
                            {...register("sendersName")}
                            required
                        />
                        <TextField
                            label="What is your email?"
                            variant="filled"
                            sx={{ width: '40rem' }}
                            type={'email'}
                            {...register("email")}
                            required
                        />
                        <TextField
                            label="Message..."
                            variant="filled"
                            sx={{ width: '40rem' }}
                            multiline
                            rows={6}
                            {...register("message")}
                            required
                        />


                        <Stack spacing={2} direction={'row'}>
                            <Autocomplete
                                options={subjects}
                                renderInput={(params) => <TextField {...params} label='Subject' />}
                                value={subValue}
                                onChange={(ev, newValue) => setSubValue(newValue)}
                                sx={{ flexGrow: 1 }}
                            />
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={resetValues}>
                                Delete
                            </Button>
                            <Button variant="contained" endIcon={<SendIcon />} type="submit">
                                Send
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </form>
        </Stack>
    );
};

export default Contact;