import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Link to="/appointment"> 
                        <Button color="secondary">Appointment</Button>
                     </Link>
                     
                    { user?.email ? 
                        <Button onClick={logOut} color="inherit">LogOut</Button>
                        :
                        <NavLink to="/login">
                            <Button color="inherit">Login</Button>
                        </NavLink>
                    }
                   
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;