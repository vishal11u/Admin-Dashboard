import React from 'react';
import TextField from '@mui/material/TextField';
import Select from 'react-select';

function Section2() {
    const options = [
        { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
    ];

    return (
        <div className='mt-2'>
            <div>
                <TextField id="outlined-basic" size='small' sx={{ width: "100%" }} label="Email Id" variant="outlined" />
            </div>
            <div className='mt-3.5'>
                <TextField id="outlined-basic" size='small' sx={{ width: "100%" }} label="Middle Name" variant="outlined" />
            </div>
            <div className='flex space-x-2 justify-between mt-3.5 items-center'>
                <TextField id="outlined-basic" size='small' sx={{ width: "100%" }} label="Middle Name" variant="outlined" />
                <TextField id="outlined-basic" size='small' sx={{ width: "100%" }} label="Middle Name" variant="outlined" />
                <TextField id="outlined-basic" size='small' sx={{ width: "100%" }} label="Middle Name" variant="outlined" />
            </div>
            <div className='w-full mt-5'>
                <Select options={options} placeholder="Maritial Status" />
            </div>
        </div>
    )
}

export default Section2;