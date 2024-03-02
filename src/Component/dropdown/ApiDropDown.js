import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Select, { components } from "react-select";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa";
import { TextField } from '@mui/material';
import { MdCancelPresentation } from "react-icons/md";
import StateDrop from './StateDrop';
import CityDrop from './CityDrop';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    height: 100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};

const DropdownIndicator = (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <FaSearch className='text-gray-600' />
            </components.DropdownIndicator>
        )
    );
};

function ApiDropDown() {
    const { handleSubmit, register } = useForm();

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let getData = "http://192.168.0.108:5001/api/countryname";
    let countriesUrl = "http://192.168.0.108:5001/api/Countrydropdown";
    let statesAndCitiesUrl = "http://192.168.0.108:5001/api/stateDropdown";

    const onSubmit = (data) => {
        console.log("data", data);
        axios.post(getData, data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    useEffect(() => {
        axios.get(countriesUrl)
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            });

        axios.get(statesAndCitiesUrl)
            .then((response) => {
                setStates(response.data.value);
                // setCities(response.data.cities);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
       
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        
    };

    return (
        <div className='p-10'>
            <div className='flex space-x-2 w-[50vw]'>
                <Select
                    classNamePrefix="select"
                    className='w-[30vw]'
                    isClearable
                    isSearchable
                    options={countries}
                    placeholder="Select Country"
                    onChange={handleCountryChange}
                    components={{ DropdownIndicator }}
                />
                <button onClick={handleOpen} className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg'>
                    <FaPlus size={18} />
                </button>
            </div>
            {/* <div className='flex mt-5 space-x-3'>
                <Select
                    classNamePrefix="select"
                    className='w-[30vw]'
                    isClearable
                    isSearchable
                    options={states}
                    placeholder="Select State"
                    onChange={handleStateChange}
                />
                <Select
                    classNamePrefix="select"
                    className='w-[30vw]'
                    isClearable
                    isSearchable
                    options={cities}
                    placeholder="Select City"
                />
            </div> */}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className=''>
                        <button onClick={handleClose} className='text-red-600'><MdCancelPresentation size={25} /></button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-1 flex items-center justify-center space-x-2 px-3'>
                        <TextField {...register("name")} size='small' label='Country Name' variant='outlined' placeholder='Country Name' />
                        <TextField {...register("countrycode")} size='small' label='Country Code' variant='outlined' placeholder='Country Code' />
                        <Checkbox {...register("isactive")} />
                        <button type='submit' className='py-2.5 px-3 rounded-md shadow-lg bg-blue-600 text-white'>
                            <FaPlus size={19} />
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default ApiDropDown;
