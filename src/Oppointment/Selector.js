import React, { useState } from 'react';
import Select from 'react-select';

const MyComponent = ({ selectedDepData, setSelectedDepData }) => {
    const options = [
        { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
    ];

    return (
        <div className='w-full'>
            <label className='text-[13px]'>Units :-</label>
            <Select options={options} />
            <TableOp selectedDepData={selectedDepData} setSelectedDepData={setSelectedDepData} />
        </div>
    );
};

function TableOp({ selectedDepData, setSelectedDepData }) {
    const table = [
        { id: 1, department: "Pharmacy" },
        { id: 2, department: "Casualty/Emergency" },
        { id: 3, department: "Neonatal Unit" },
        { id: 4, department: "Dietetics" },
        { id: 5, department: "Hematology 1" },
        { id: 6, department: "Oncology" },
        { id: 7, department: "Physiotherapy" },
        { id: 8, department: "Pathology" },
        { id: 9, department: "Critical Care" },
        { id: 10, department: "Cardiology" }
    ];

    const handleDepDataSelect = (department) => {
        if (selectedDepData.includes(department)) {
            setSelectedDepData(selectedDepData.filter(dep => dep !== department));
        } else {
            setSelectedDepData([...selectedDepData, department]);
            console.log(department);
        }
    };

    return (
        <div className='mt-2 border rounded-md w-full'>
            <h1 className='bg-black text-white py-3 px-4 rounded-t-md font-[500]'>Department</h1>
            {table.map((item) => (
                <button
                    key={item.id}
                    className={`border w-full text-left py-2 px-4 transition-all ${selectedDepData.includes(item.department) ? 'bg-gray-200 border border-white' : ''}`}
                    type='button'
                    onClick={() => handleDepDataSelect(item.department)}
                >
                    {item.department}
                </button>
            ))}
        </div>
    );
}

export default MyComponent;
