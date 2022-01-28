import React from 'react';
import {Box, Typography, Grid, Container} from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are usually done at six-month cleaning appointments. Treatment involves the dentist applying varnish to your teeth using a gel.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity..',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface. ',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 500, m: 2, color: "success.main"}} variant='h6' component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{fontWeight: 600, m:5}} variant='h4' component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service 
                            key={service.name} 
                            service={service}
                        ></Service>
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;