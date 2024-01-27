import React, { useState } from 'react';
import Select from 'react-select';
import ReactSelector2 from '../Drawer/ReactSelector2';

const options = [
    { id: 1, value: 'All', label: 'All' },
];

const MyComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className='mt-5'>
            <label className='text-[13px]'>Select Department :-</label>
            <Select options={options} onChange={handleSelectChange} value={selectedOption}/>
            <ReactSelector2 />
        </div>
    );
};

export default MyComponent;
