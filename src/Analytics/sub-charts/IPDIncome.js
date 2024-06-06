import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Income: 100,
    },
    {
        name: 'Tue',
        Income: 300,
    },
    {
        name: 'Wed',
        Income: 200,
    },
    {
        name: 'Thu',
        Income: 450,
    },
    {
        name: 'Fri',
        Income: 350,
    },
    {
        name: 'Sat',
        Income: 500,
    },
    {
        name: 'Sun',
        Income: 600,
    },
];

function IPDIncome() {
    const [activeButton, setActiveButton] = useState('Day');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className='w-[39.5%] h-[39vh] border shadow py-1 mt-2 px-2 ml-2 rounded-md overflow-hidden'>
            <div className='flex items-center justify-between space-x-1 border-b pb-1.5 pt-0.5'>
                <h1 className='font-semibold text-[14px]'>IPD Income</h1>
                <div className='flex items-center text-[13px] font-medium'>
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
            </div>
            {/* --------------------------------------- */}
            <div className='w-full h-[calc(100%-2rem)]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        width={500}
                        height={300}
                        margin={{
                            top: 10,
                            right: 5,
                            left: -10,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="Income" stroke="blue" strokeWidth={1.5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default IPDIncome;