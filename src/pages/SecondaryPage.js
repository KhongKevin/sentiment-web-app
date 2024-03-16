import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomePage from './HomePage';
const SecondaryPage= () => {
    return(
        <div>
            <h1>Secondary Page</h1>
            <Link to="/HomePage">
                <Button variant="contained" color="primary">Home Page</Button>
            </Link>
        </div>
    );
};

export default SecondaryPage;