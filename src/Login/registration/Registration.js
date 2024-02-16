import React from 'react';
import PersonalInfo from './PersonalInfo';
import Documents from './Documents';
import Address from './Address';

function Registration() {
    const handleError =()=>{
        console.log('Error')
    }

    return (
        <div className='bg-gray-100 px-2 h-screen'>
            <h1 className='text-center text-[25px] font-medium py-2.5'>Patient Registration</h1>
            <div className=' bg-white h-[80%] rounded shadow-xl px-3 pt-1'>
                <h1 className='font-medium text-[20px] pt-2'>Patient Details:</h1>
                <PersonalInfo />
                <h1 className='font-medium text-[18px] pt-3'>Documents:</h1>
                <Documents />
                <h1 className='font-medium text-[18px] pt-2'>Address Details:</h1>
                <Address />
                <div className='mt-3 text-center'>
                    <button type='button' className='px-8 py-2 font-medium text-white shadow-lg bg-green-600 rounded-md transition-all hover:bg-gray-500' onClick={handleError}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;