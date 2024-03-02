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

function StateDrop() {
    const { handleSubmit, register } = useForm();

    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let getData = "http://192.168.0.108:5001/api/state";
    let dropData = "http://192.168.0.108:5001/api/stateDropdown";

    const onSubmit = (data) => {
        axios.post(getData, data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    const DropData = () => {
        axios.get(dropData)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    const Dropdata = data.map((list) => ({
        label: list.label,
        value: list.label
    }))

    useEffect(() => {
        DropData();
    }, [])

    return (
        <div className='p-10'>
            <div className='flex space-x-2'>
                <Select
                    classNamePrefix="select"
                    className='w-[30vw]'
                    isClearable
                    isSearchable
                    options={Dropdata}
                    placeholder="Select State"
                    components={{ DropdownIndicator }}
                />
                <button onClick={handleOpen} className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg'>
                    <FaPlus size={18} />
                </button>
            </div>
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
                        <TextField {...register("counrty_id")} size='small' label='Country Code' variant='outlined' />
                        <TextField {...register("state")} size='small' label='State' variant='outlined' />
                        <TextField {...register("statecode")} size='small' label='State Code' variant='outlined' />
                        <Checkbox {...register("statesatus")} />
                        <button type='submit' className='py-2.5 px-3 rounded-md shadow-lg bg-blue-600 text-white'>
                            <FaPlus size={19} />
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

// "counrty_id": 0,
// "id": 0,
// "state": "string",
// "statecode": 0,
// "statesatus": true

export default StateDrop;