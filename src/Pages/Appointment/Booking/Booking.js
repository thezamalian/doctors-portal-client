import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6">
                        {time}
                    </Typography>
                    <Typography variant="caption">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <br />
                    <Button onClick={handleOpen} variant="contained">
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;