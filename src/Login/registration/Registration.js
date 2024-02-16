import React from 'react';
import PersonalInfo from './PersonalInfo';

function Registration() {
    return (
        <div className='bg-gray-100 px-2 h-screen'>
            <h1 className='text-center text-[25px] font-medium py-2.5'>Patient Registration</h1>
            <div className='border bg-white h-[70%] rounded shadow-xl p-3'>
                <PersonalInfo />
            </div>
        </div>
    )
}

export default Registration;