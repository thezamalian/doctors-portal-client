import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container 
            style={bannerBg} 
            sx={{ flexGrow: 1 }}
        >
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} style={{
                    ...verticalCenter, 
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{
                            fontSize: 13, 
                            fontWeight: 300,
                            my: 3, 
                            color: 'text.secondary'
                        }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur suscipit ut harum iure consequatur amet tempore reprehenderit ratione maxime. Consequatur.
                        </Typography>
                        <Button 
                            variant="contained" 
                            style={{backgroundColor: ' #39d8e2 '}}
                        >
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: "400px"}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;