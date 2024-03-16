// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SecondaryPage from './SecondaryPage';
const HomePage = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1>Home Page</h1>
        <Link to="/SecondaryPage">
          <Button variant="contained" color="primary">Secondary Page</Button>
        </Link>
      </div>
    );
  };
export default HomePage;