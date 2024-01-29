import React from 'react';
import CountUp from 'react-countup';
import { FaUserDoctor } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";

function ChartPie() {
    const Doctor = [
        {
            id: 1,
            label: "Doctors",
            logo: <FaUserDoctor size={40}/>,
            count: <CountUp delay={0.4} end={250} duration={0.6} />
        },
        {
            id: 2,
            label: "Department",
            logo: <FcDepartment size={40}/>,
            count: <CountUp delay={0.4} end={175} duration={0.6} />
        },
    ]

    return (
        <div className='h-[22vh] overflow-hidden space-y-2'>
            {
                Doctor.map((item) => (
                    <div className='w-full flex p-4 bg-gray-700 text-white h-[10.5vh] items-center justify-between shadow rounded-lg' key={item.id}>
                        <div>
                            <h1 className='font-semibold'>{item.label}</h1>
                            <p>{item.count}</p>
                        </div>
                        <h1>{item.logo}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export default ChartPie