import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, isLoading, loginUser, error} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newLoginData = {...loginData};
        newLoginData[field] = value;

        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        // alert('submitted')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom >Login</Typography>
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
                            <NavLink to="/register">
                                <Button variant='text'>
                                    New User? Please Register
                                </Button>
                        </NavLink>
                        <Button sx={{width: '75%', m: 1}} variant="contained" type="submit">
                            Login
                        </Button>
                    </form>}
                    {isLoading && <CircularProgress sx={{mt:3}} />}
                    {user.email && <Alert sx={{mx: 7}} severity="success">You have logged in successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;