import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Expenses: 4000,
        Income: 2400,
        amt: 2400,
    },
    {
        name: 'Tue',
        Expenses: 3000,
        Income: 1398,
        amt: 2210,
    },
    {
        name: 'Wed',
        Expenses: 2000,
        Income: 9800,
        amt: 2290,
    },
    {
        name: 'Thu',
        Expenses: 2780,
        Income: 3908,
        amt: 2000,
    },
    {
        name: 'Fri',
        Expenses: 1890,
        Income: 4800,
        amt: 2181,
    },
    {
        name: 'Sat',
        Expenses: 2390,
        Income: 3800,
        amt: 2500,
    },
    {
        name: 'Sun',
        Expenses: 3490,
        Income: 4300,
        amt: 2100,
    },
];

function IncomeExp() {
    const [activeButton, setActiveButton] = useState('Day');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const renderCustomLabel = ({ value }) => `₹${value}`;

    return (
        <div className='w-[60%] h-[39vh] border px-2 py-1 mt-2 shadow rounded-md overflow-hidden'>
            <div className='flex items-center justify-between space-x-1 border-b pb-1.5 pt-0.5'>
                <h1 className='font-semibold text-[14px]'>Income v/s Expenses</h1>
                <div className='flex items-center space-x-2 font-medium text-[14px]'>
                    <div className='flex items-center'>
                        <span className='bg-green-500 h-3 w-3 inline-block rounded-full mr-1'></span>
                        <h1>Income</h1>
                    </div>
                    <div className='flex items-center'>
                        <span className='bg-red-500 h-3 w-3 inline-block rounded-full mr-1'></span>
                        <h1>Expenses</h1>
                    </div>
                </div>
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
            {/* ------------- Chart section -------------- */}
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
                        <XAxis dataKey="name"
                            // axisLine={false}
                            // tickLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            // axisLine={false}
                            // tickLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip />
                        <Line type="monotone" dataKey="Income" stroke="green" strokeWidth={1.5} />
                        <Line type="monotone" dataKey="Expenses" stroke="red" strokeWidth={1.5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default IncomeExp;
