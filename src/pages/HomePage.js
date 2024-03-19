import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToggleButton } from '@mui/material';
import { TextField } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MenuItem, Select } from '@mui/material'; // Import Select and MenuItem from @mui/material
 


const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" version="1.1" id="Capa_1" viewBox="0 0 17.837 17.837">
    <path fill="#ffffff" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
  </svg>
);


const ViewListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="18" height="18" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1"><path d="M50,15.52H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H50a2,2,0,0,1,2,2V13.52A2,2,0,0,1,50,15.52Zm-46-4H48V4H4Z"/><path d="M50,33.76H2a2,2,0,0,1-2-2V20.24a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V31.76A2,2,0,0,1,50,33.76Zm-46-4H48V22.24H4Z"/><path d="M50,52H2a2,2,0,0,1-2-2V38.48a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM4,48H48V40.48H4Z"/></svg>
)


const HomePage = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Step 3: Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1>Home Page</h1>
      <Link to="/SecondaryPage">
        <Button variant="contained" color="primary">Secondary Page</Button>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <ToggleButton value="list" aria-label="list" onClick={toggleVisibility}>
          <ViewListIcon />
        </ToggleButton>
        {isVisible && (
          <>
            <Select label="Options1" value="setting1" onChange={() => {}} renderValue={() => "Setting 1"}>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>
            <Select label="Options2" value="setting2" onChange={() => {}} renderValue={() => "Setting 2"} >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>
          </>)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <TextField id="outlined-basic" label="sentiment word" variant="outlined" style={{ padding: '8px 16px' }} />
        <Button variant="contained" endIcon={<SendIcon />}>
          Calculate
        </Button>
      </div>
    </div>
    //TODO ADD MULTI SELECT
  );
  };
export default HomePage;