import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading, error} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newLoginData = {...loginData};
        newLoginData[field] = value;

        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert("Your password did not match!");
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom >
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{width: "75%", m:1}}
                            id="standard-basic" 
                            label="Your Email" 
                            type="email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                            <br />
                        <TextField 
                            sx={{width: "75%", m:1}}
                            id="standard-basic" 
                            label="Your Password"
                            type="password" 
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField 
                            sx={{width: "75%", m:1}}
                            id="standard-basic" 
                            label="ReType Your Password"
                            type="password" 
                            name='password2'
                            onChange={handleOnChange}
                            variant="standard" />

                        <NavLink to="/login">
                            <Button variant='text'>
                                Already Registered? Please Login
                            </Button>
                        </NavLink>
                        <Button sx={{width: '75%', m: 1}} variant="contained" type="submit">
                            Register
                        </Button>
                    </form>}
                    {isLoading && <CircularProgress sx={{mt:3}} />}
                    {user.email && <Alert severity="success">You have registered successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;