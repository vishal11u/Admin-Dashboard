import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 }, ,
];

const COLORS = ['#FFD700', '#8884d8'];

function DrHospShare() {
    const [activeButton, setActiveButton] = useState('Day');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const renderCustomLabel = ({ value }) => `₹${value}`;

    return (
        <div className='w-[20%] h-[39vh] border shadow py-1 mt-2 px-2 rounded-md overflow-hidden'>
            <div className='flex items-center justify-between space-x-1 border-b pb-1.5 pt-0.5'>
                <h1 className='font-semibold text-[14px]'>Dr. V/S Hospital Share</h1>
            </div>
            {/* ------------- Chart section -------------- */}
            <div className='w-full h-[calc(100%-2rem)] mt-2'>
                <div className='flex justify-around text-[13px] font-medium'>
                    <div>
                        <button
                            type='button'
                            className={`border px-2 py-0.5 rounded-l ${activeButton === 'Day' ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleButtonClick('Day')}
                        >
                            Day
                        </button>
                        <button
                            type='button'
                            className={`border px-2 py-0.5 ${activeButton === 'Week' ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleButtonClick('Week')}
                        >
                            Week
                        </button>
                        <button
                            type='button'
                            className={`border px-2 py-0.5 rounded-r ${activeButton === 'Month' ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleButtonClick('Month')}
                        >
                            Month
                        </button>
                    </div>
                    <div className=''>
                        <div className='flex items-center'>
                            <span className='bg-indigo-500 h-3 w-3 inline-block rounded-full mr-1'></span>
                            <h1>Hospital</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='bg-yellow-500 h-3 w-3 inline-block rounded-full mr-1'></span>
                            <h1>Doctor</h1>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------ */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="42%"
                            innerRadius={30}
                            outerRadius={60}
                            fill="#82ca9d"
                            label={renderCustomLabel}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DrHospShare;