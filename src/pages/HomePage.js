// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToggleButton } from '@mui/material';
import { TextField } from '@mui/material';
import SecondaryPage from './SecondaryPage';


const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="18">
    <path d="M21.7 12l-17-12v24z" fill="#FFFFFF"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

const ViewListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="18" height="18" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1"><path d="M50,15.52H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H50a2,2,0,0,1,2,2V13.52A2,2,0,0,1,50,15.52Zm-46-4H48V4H4Z"/><path d="M50,33.76H2a2,2,0,0,1-2-2V20.24a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V31.76A2,2,0,0,1,50,33.76Zm-46-4H48V22.24H4Z"/><path d="M50,52H2a2,2,0,0,1-2-2V38.48a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM4,48H48V40.48H4Z"/></svg>
)


const HomePage = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1>Home Page</h1>
        <Link to="/SecondaryPage">
          <Button variant="contained" color="primary">Secondary Page</Button>
        </Link>
        <div style={{ marginRight: '15%' }}> 
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
          <TextField id="outlined-basic" label="sentiment word" variant="outlined" style={{ padding: '8px 16px' }} />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        
      </div>
    );
  };
export default HomePage;