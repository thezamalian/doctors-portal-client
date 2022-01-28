import React from 'react';
import { Grid, Card, CardContent,CardMedia, Typography } from '@mui/material';

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
            <CardMedia
                component="img"
                sx={{width: 'auto', height: '80px', marginX: 'auto'}}
                image={img}
                alt="green iguana"
            />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                   
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;