// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/InitialPage" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    My App
                </Typography>
                <Typography variant="h6" component={Link} to="/AboutPage" sx={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>
                    About
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
