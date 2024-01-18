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
        <div className='mt-5 w-full'>
            <label className='text-[13px]'>Units :-</label>
            <Select options={options} onChange={handleSelectChange} value={selectedOption} />
            {selectedOption && <TableOp />}
        </div>
    );
};

function TableOp() {
    const listData = [];
    const handlePharm = () => {
        console.log('pharmacy')
    }
    return (
        <div className=''>
            <h1>Department</h1>
            {
                listData.map((data) => (
                    <div>
                        <button type='submit' onClick={handlePharm}>{data.department}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MyComponent;

