import React from 'react';
import { Backdrop, Box, Fade, Modal, Typography, TextField, Button } from '@mui/material';

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

const BookingModal = ({booking, date, open, handleClose}) => {
    const {name, time} = booking;

    const handleBookSubmit = e => {
        alert("Submitting");
        
        // Collect data 
        // Send to the server
        
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
                                sx={{m:1}}
                            />
                            <TextField
                                fullWidth
                                label="Your Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                sx={{m:1}}
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                sx={{m:1}}
                            />
                            <TextField
                                fullWidth
                                label="Your Phone"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                sx={{m:1}}
                            />
                            <TextField
                                disabled
                                fullWidth
                                label="Date"
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                                sx={{m:1}}
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