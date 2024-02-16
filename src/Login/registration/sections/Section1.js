import React from 'react';
import Select, { components } from 'react-select';
import { FaSearch } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Selects from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DropdownIndicator = (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <FaSearch className='text-black' />
            </components.DropdownIndicator>
        )
    );
};

function Section1() {
    const options = [
        { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
    ];

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='mt-2'>
            <div className='w-full'>
                <Select options={options} placeholder="Search By Patient Name/UHID/Mobile No." components={{ DropdownIndicator }} />
            </div>
            <div className='mt-4 space-x-3 flex justify-between items-center'>
                <FormControl sx={{ width: "100px" }} size='small'>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Selects labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Selects>
                </FormControl>
                <div>
                    <TextField id="outlined-basic" size='small' sx={{ width: "19.8vw" }} label="First Name" variant="outlined" />
                </div>
            </div>
            <div className='mt-2 flex justify-between items-center'>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker label="Date" sx={{ width: '19vw' }} slotProps={{textField:{size:"small"}}}/>
                    </DemoContainer>
                </LocalizationProvider>
                <div>
                    <TextField id="outlined-basic" size='small' sx={{ width: "6vw",marginTop:"5px" }} label="Age" variant="outlined" />
                </div>
            </div>
            <div className='mt-4 space-x-3 flex justify-between items-center'>
                <FormControl sx={{ width: "100px" }} size='small'>
                    <InputLabel id="demo-simple-select-label">ISD</InputLabel>
                    <Selects labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="ISD" onChange={handleChange} >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Selects>
                </FormControl>
                <div>
                    <TextField id="outlined-basic" size='small' sx={{ width: "19.8vw" }} label="Mobile*" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default Section1;