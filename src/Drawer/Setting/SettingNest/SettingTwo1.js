import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SettingTwo1() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='px-4 py-5 text-left'>
            <h1 className='text-[20px] text-black font-medium pb-4 border-b'>Personal Information</h1>
            <div className='py-5 space-x-5 flex items-center'>
                <TextField sx={{ width: "250px" }} id="outlined-basic" label="Name" defaultValue="Vishal" variant="outlined" />
                <TextField sx={{ width: "250px" }} id="outlined-basic" label="Location" defaultValue="Satara" variant="outlined" />
            </div>
            <div>
                <TextField InputProps={{ sx: { height: 120 } }} sx={{ width: "520px" }} id="outlined-basic" defaultValue="Helloooooo" label="Bio" variant="outlined" />
                <FormControl sx={{ minWidth: '150px', marginTop: "1.5rem" }}>
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
            </div>
        </div>
    )
}

export default SettingTwo1;