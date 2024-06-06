import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function IPDFeedback() {
    const feedback = [
        { id: 1, title: "Highly Satisfied" },
        { id: 2, title: "Satisfied" },
        { id: 3, title: "Average" },
        { id: 4, title: "Poor" },
        { id: 5, title: "DisSatisfied" }
    ];

    const getColor = (title) => {
        switch (title) {
            case "Highly Satisfied":
                return "text-green-600";
            case "Satisfied":
                return "text-blue-600";
            case "Average":
                return "text-yellow-600";
            case "Poor":
                return "text-orange-600";
            case "DisSatisfied":
                return "text-red-600";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className='border w-[49.5%] rounded-md shadow h-[40vh] p-2'>
            <h1 className='font-semibold'>IPD Patient feedback <span className='text-orange-600'>(Average Day Wise)</span></h1>
            <div className='px-2 flex items-center justify-between'>
                <div className='mt-4 space-y-3 font-semibold'>
                    {feedback.map((list) => (
                        <h1 key={list.id} className={getColor(list.title)}>{list.title}</h1>
                    ))}
                </div>
                {/* ------------------- */}
                <div className='w-full h-[calc(100%-1rem)] border'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default IPDFeedback;
