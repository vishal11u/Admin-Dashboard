import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Documents from './Documents';
import Address from './Address';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Registration() {
    const schema = yup.object({
        Prefix: yup.string().required(),
        Firstname: yup.string().required(),
        Lastname: yup.string().required(),
        Mobileno: yup.number().required(),
        Houseno: yup.string().required(),
        Pincode: yup.number().positive().integer().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [gender, setGender] = useState([]);
    const [userdata, setUserdata] = useState([]);

    const onSubmit = (data) => {
        console.log("data", data);
        setUserdata([...userdata, data]);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    
    return (
        <div className='bg-gray-100 px-2 h-screen w-full'>
            <h1 className='text-center text-[25px] font-medium py-2.5'>Patient Registration</h1>
            <div className=' bg-white h-[81%] w-full rounded shadow-xl px-3 pt-1'>
                <h1 className='font-medium text-[20px] pt-2'>Patient Details:</h1>
                <PersonalInfo register={register} gender={gender} errors={errors} handleChangeGender={handleChangeGender} />
                <h1 className='font-medium text-[18px] pt-3'>Documents:</h1>
                <Documents />
                <h1 className='font-medium text-[18px] pt-2'>Address Details:</h1>
                <Address register={register} errors={errors} />
                <div className='mt-4 text-center'>
                    <button type='button' className='px-8 py-2 font-medium text-white shadow-lg bg-green-600 rounded-md transition-all hover:bg-gray-500' onClick={handleSubmit(onSubmit)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;