import React, { useState } from 'react';
import { Backdrop, Box, Fade, Modal, Typography, TextField, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, date, open, handleClose, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '', };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo }
        newInfo[field] = value;

        setBookingInfo(newInfo);
    }

    const handleBookSubmit = e => {
        // Collect data 
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // console.log(appointment)
        // Send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }
            })

        handleClose();
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookSubmit}>
                            <TextField
                                disabled
                                fullWidth
                                label="Time"
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                                sx={{ m: 1 }}
                            />
                            <TextField
                                fullWidth
                                onChange={handleOnChange}
                                label="Your Name"
                                name="patientName"
                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                size="small"
                                sx={{ m: 1 }}
                            />
                            <TextField
                                fullWidth
                                onChange={handleOnChange}
                                label="Your Email"
                                name='email'
                                id="outlined-size-small"
                                defaultValue={user.email}
                                size="small"
                                sx={{ m: 1 }}
                            />
                            <TextField
                                fullWidth
                                onChange={handleOnChange}
                                label="Your Phone"
                                name="phone"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                sx={{ m: 1 }}
                            />
                            <TextField
                                disabled
                                fullWidth
                                label="Date"
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                                sx={{ m: 1 }}
                            />
                            <Button type="submit" variant='contained'>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;