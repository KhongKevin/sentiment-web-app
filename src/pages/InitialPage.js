// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <h1>Initial Page</h1>
            <Link to="/SecondaryPage">
                <Button variant="contained" color="primary">Secondary Page</Button>
            </Link>
            <Link to="/HomePage">
                <Button variant="contained" color="primary">HomePage</Button>
            </Link>
        </div>
    );
};

export default HomePage;
