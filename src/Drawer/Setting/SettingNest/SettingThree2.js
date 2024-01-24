import React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function SettingThree2() {
    return (
        <div className='text-left px-4 py-3'>
            <h1 className='text-[20px] font-medium text-black pb-3 border-b'>Advance Setting</h1>
            <div className='py-2'>
                <h1>Assign responsibility</h1>
                <div className='flex space-x-3 items-center'>
                    <Switch {...label} defaultChecked />
                    <p>Gilad Gray</p>
                </div>
                <div className='flex space-x-3 items-center'>
                    <Switch {...label} />
                    <p>Jason Killian</p>
                </div>
                <div className='flex space-x-3 items-center'>
                    <Switch {...label} defaultChecked />
                    <p>Antoine Llorca</p>
                </div>
            </div>
            <p className='text-[12px]'>Be careful</p>
        </div>
    )
}

export default SettingThree2;