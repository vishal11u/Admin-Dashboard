import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import ApiCRUD from './ApiCRUD';
import axios from 'axios';

function UserForm() {
    const schema = yup.object({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        email: yup.string().email("Enter a valid email").required("Email is required"),
        number: yup.string().matches(/^[0-9]{10}$/, "Enter a valid mobile number").required("Mobile number is required"),
        age: yup.number().required("Age is required").positive("Age must be positive").integer("Age must be an integer"),
        address: yup.string().required("Address is required"),
        aadharno: yup.string().required("Aadhar number is required"),
        pincode: yup.string().matches(/^[0-9]{6}$/, "Enter a valid pincode").required("Pincode is required"),
        bloodgroup: yup.string().required("Blood group is required"),
    });

    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [users, setUsers] = useState([]);
    const [data, setData] = useState([])

    const onSubmit = (i) => {
        console.log(data);
        handleSend(i)
        setUsers([...users, i]);
        reset();
    }

    useEffect(() => {
        Post();
    }, [])

    const Post = () => {
        axios.get("http://192.168.0.115/5001/api/saveFront/frontfrom")
            .then((response) => response.data)
            .then((ref) => {
                setData(ref)
            });
    };

    const handleSend = () => {
        axios.post("http://192.168.0.115/5001/api/saveFront/getFrontendFrom/1", users)
            .then((response) => response.data)
            .then((ref) => {
                setData([...data, ref]);
            });
    };

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='mb-4 border shadow-lg rounded mx-auto px-10 py-6 md:w-[34vw] space-y-3'>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="First Name"
                        placeholder='First Name'
                        variant="outlined"
                        {...register("firstname")}
                        error={!!errors.firstname}
                    // helperText={errors.firstname?.message}
                    />
                    <TextField
                        size='small'
                        label="Last Name"
                        placeholder='Last Name'
                        variant="outlined"
                        {...register("lastname")}
                        error={!!errors.lastname}
                    // helperText={errors.lastname?.message}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Email"
                        placeholder='Email'
                        variant="outlined"
                        {...register("email")}
                        error={!!errors.email}
                    // helperText={errors.email?.message}
                    />
                    <TextField
                        size='small'
                        label="Mobile No"
                        type='number'
                        placeholder='Mobile No'
                        variant="outlined"
                        {...register("number")}
                        error={!!errors.number}
                    // helperText={errors.number?.message}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Age"
                        type='number'
                        placeholder='Age'
                        variant="outlined"
                        {...register("age")}
                        error={!!errors.age}
                    // helperText={errors.age?.message}
                    />
                    <TextField
                        size='small'
                        label="Aadhar No"
                        placeholder='Aadhar No'
                        variant="outlined"
                        {...register("aadharno")}
                        error={!!errors.aadharno}
                    // helperText={errors.aadharno?.message}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Address"
                        placeholder='Address'
                        variant="outlined"
                        {...register("address")}
                        error={!!errors.address}
                    // helperText={errors.address?.message}
                    />
                    <TextField
                        size='small'
                        label="Pincode"
                        type='number'
                        placeholder='Pincode'
                        variant="outlined"
                        {...register("pincode")}
                        error={!!errors.pincode}
                    // helperText={errors.pincode?.message}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Blood Group"
                        placeholder='Blood Group'
                        variant="outlined"
                        {...register("bloodgroup")}
                        error={!!errors.bloodgroup}
                    // helperText={errors.bloodgroup?.message}
                    />
                </div>
                <button type='submit' className='py-1 px-5 mt-2 w-full bg-green-600 text-white rounded-md shadow-lg border-none transition-all hover:bg-green-700'>Submit</button>
            </form>
            {/* <ApiCRUD /> */}
        </div>
    );
}

export default UserForm;