import React, { useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data01 = [
    { name: 'Cash', value: 39862 },
    { name: 'UPI / Online', value: 10324 },
    { name: 'Credit Card', value: 56545 },
    { name: 'Debit Card', value: 26523 },
    { name: 'Cheque', value: 26582 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

function PaymentType() {
    const [activeButton, setActiveButton] = useState('Day');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const renderCustomLabel = ({ value }) => `₹${value}`;

    return (
        <div className='w-[39.5%] h-[39vh] border shadow py-1 mt-2 px-2 ml-3 rounded-md overflow-hidden'>
            <div className='flex items-center justify-between space-x-1 border-b pb-1.5 pt-0.5'>
                <h1 className='font-semibold text-[14px]'>Payment Type Wise Detail</h1>
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
            <div className='w-full h-[calc(100%-2rem)] flex justify-between'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data01}
                            cx="45%"
                            cy="52%"
                            outerRadius={75}
                            fill="#8884d8"
                            label={renderCustomLabel}
                        >
                            {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                {/* --------- content ------------- */}
                <div className='w-[35%]'>
                    <h1 className='font-semibold mt-4 text-[17px]'>Total: ₹1,59,836</h1>
                    <div className='mt-5 space-y-2'>
                        {data01.map((entry, index) => (
                            <div key={index} className='flex items-center text-[13px] font-medium space-x-1'>
                                <span className='h-3 w-3 inline-block rounded-full mr-1' style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                <h1 className='text-[14px] font-semibold'>{entry.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentType;
