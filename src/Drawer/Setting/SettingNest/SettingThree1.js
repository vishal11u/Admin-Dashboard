import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SettingThree1() {
  const [age, setAge] = React.useState('');
  const [ge, setGe] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange2 = (event) => {
    setGe(event.target.value);
  }

  return (
    <div className='px-4 py-3 text-left'>
      <h1 className='text-[20px] text-black pb-4 border-b font-medium'>General Setting</h1>
      <div>
        <div className='py-6 space-x-5 flex items-center'>
          <TextField sx={{ width: "520px" }} id="outlined-basic" defaultValue="___vishal_11_" label="Username" variant="outlined" />
          <TextField sx={{ width: "520px" }} id="outlined-basic" defaultValue="vishal@gmail.com" label="Account Email" variant="outlined" />
        </div>
        <div className='py-2 space-x-5 flex items-center'>
          <FormControl sx={{ minWidth: '520px' }}>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="User Type"
              onChange={handleChange}>
              <MenuItem value={10}>Manager</MenuItem>
              <MenuItem value={20}>Admin</MenuItem>
              <MenuItem value={30}>User</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: '520px' }}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ge}
              label="Location"
              onChange={handleChange2}>
              <MenuItem value={10}>India</MenuItem>
              <MenuItem value={20}>America</MenuItem>
              <MenuItem value={30}>Russia</MenuItem>
              <MenuItem value={40}>Japan</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default SettingThree1;