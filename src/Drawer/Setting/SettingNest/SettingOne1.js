import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SettingOne1() {
    return (
        <div className='text-left px-4 py-5'>
            <h1 className='text-[20px] font-medium text-black pb-3 border-b'>P Kumar</h1>
            <h1 className='text-[17px] text-black py-5 border-b'><EmailIcon className='mr-3'/> code@codemstr.com</h1>
            <h1 className='text-[17px] text-black py-5 border-b'><SmartphoneIcon className='mr-3'/> (+91) 99999 99999</h1>
            <h1 className='text-[17px] text-black py-5'><LocationOnIcon className='mr-3'/> code@codemstr.com</h1>
        </div>
    )
}
export default SettingOne1;