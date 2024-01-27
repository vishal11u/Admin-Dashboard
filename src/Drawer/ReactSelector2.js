import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { id: 1, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/feedback/answer' },
    { id: 2, value: 'Pathiology template for consultant', label: 'Pathiology template for consultant', path: '/feedback/answer' },
    { id: 3, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/feedback/answer' },
    { id: 4, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/feedback/answer' },
    { id: 5, value: 'Pathiology template for consultant', label: 'Pathiology template for consultant', path: '/feedback/answer' },
    { id: 6, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/feedback/answer' },
];

const MyComponent2 = () => {
    const navigate = useNavigate();

    const handleSelectChange = (selectedOption) => {
        if (selectedOption && selectedOption.path) {
            navigate(selectedOption.path);
        }
    };

    return (
        <div className='mt-3'>
            <label className='text-[13px]'>Select Template :-</label>
            <Select options={options} onChange={handleSelectChange} menuIsOpen />
        </div>
    );
};

export default MyComponent2;
