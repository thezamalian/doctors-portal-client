import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba( 49, 58, 100, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 400, marginTop: '-110px'}} src={doctor} alt="" srcset="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', 
                    justifyContent: 'flex-start', 
                    alignItems: 'center',
                    textAlign: 'left'
                    }}>
                    <Box >
                        <Typography variant='h6' sx={{mb: 5}} style={{color: ' #39d8e2 '}}>
                            Appointment
                        </Typography>
                        <Typography variant='h4'>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{mb: 5}} style={{color: 'white', fontSize: 14, fontWeight: 300}}>
                            Make an Appointment Today, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt, repellendus quis modi dolore natus consequuntur ipsam blanditiis ipsum ex.
                        </Typography>
                        <br />
                        <Button variant='contained' style={{backgroundColor: ' #39d8e2 '}}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;