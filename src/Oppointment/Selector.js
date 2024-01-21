import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
];

const MyComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className='w-full'>
            <label className='text-[13px]'>Units :-</label>
            <Select options={options} onChange={handleSelectChange} value={selectedOption} />
            <TableOp />
        </div>
    );
};

function TableOp() {
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

    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleDepart = (department) => {
        setSelectedDepartment(department);
    };

    return (
        <div className='mt-2 border rounded-md'>
            <h1 className='bg-blue-400 py-2 px-4 rounded-t-md font-[500]'>Department</h1>
            {
                table.map((item) => (
                    <button key={item.id}
                        className={`border w-full text-left py-2 px-4 transition-all ${selectedDepartment === item.department ? 'bg-blue-300' : ''}`}
                        type='button'
                        onClick={() => handleDepart(item.department)}
                    >
                        {item.department}
                    </button>
                ))
            }
        </div>
    );
}


export default MyComponent;

