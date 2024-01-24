import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SettingTwo2() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='px-4 py-5 text-left'>
      <h1 className='text-[20px] text-black font-medium pb-4 border-b'>Contact Information</h1>
      <div className='py-5 flex items-center space-x-5'>
        <TextField sx={{ width: "250px" }} id="outlined-basic" defaultValue="+91 9999999" label="Contact No" variant="outlined" />
        <TextField sx={{ width: "250px" }} id="outlined-basic" defaultValue="vishal11@gmail.com" label="Email" variant="outlined" />
      </div>
      <div>
        <TextField sx={{ width: "520px" }} id="outlined-basic" label="Profile URL" variant="outlined" />
        <TextField InputProps={{ sx: { height: 120 } }} sx={{ width: "520px",marginTop:"1.5rem" }} id="outlined-basic" defaultValue="Amrut Colony, Satara - 415002" label="Address" variant="outlined" />
      </div>
    </div>
  )
}

export default SettingTwo2;