import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Selects from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Select, { components } from 'react-select';
import { FaSearch } from 'react-icons/fa';

const DropdownIndicator = (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <FaSearch className='text-gray-500' />
            </components.DropdownIndicator>
        )
    );
};

function Section4({ errors, register, age, handleChange }) {
    const options = [
        { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.selectProps.error ? '#f44336' : provided.borderColor,
            color: state.selectProps.error ? '#f44336' : provided.color 
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: state.selectProps.error ? '#f44336' : provided.color 
        })
    };

    return (
        <div className='mt-2 flex space-x-2 h-full'>
            <div className='w-[30%]'>
                <div>
                    <TextField id="outlined-basic" size='small' sx={{ width: "27.2vw" }} label="House No/Building Name/Flat No.*" variant="outlined"
                        {...register("Houseno")} error={errors.Houseno?.message} />
                </div>
                <div className='flex items-center space-x-2 mt-2'>
                    <FormControl sx={{ width: "300px" }} size='small'>
                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                        <Selects labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="District" onChange={handleChange} >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Selects>
                    </FormControl>
                    <Select options={options} placeholder="Pincode*" className='w-full' components={{ DropdownIndicator }}
                        {...register("Pincode")} error={errors.Pincode?.message} styles={customStyles} />
                </div>
            </div>
            <div className='w-[30%]'>
                <TextField id="outlined-basic" size='small' sx={{ width: "27.2vw" }} label="Street Address" variant="outlined" />
                <FormControl sx={{ width: "418px", marginTop: '9px' }} size='small'>
                    <InputLabel id="demo-simple-select-label">District</InputLabel>
                    <Selects labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="District" onChange={handleChange} >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Selects>
                </FormControl>
            </div>
            <div className='w-[40%] flex gap-2'>
                <div className='space-y-3'>
                    <Select options={options} placeholder="Country" className='lg:w-[18vw]' />
                    <Select options={options} placeholder="Taluka" className='lg:w-[18vw]' />
                </div>
                <div className='space-y-3'>
                    <Select options={options} placeholder="State" className='lg:w-[18vw]' />
                    <Select options={options} placeholder="City" className='lg:w-[18vw]' />
                </div>
            </div>
        </div>
    )
}

export default Section4;
