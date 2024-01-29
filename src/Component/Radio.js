import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='bg-gray-100 px-6 gap-2 flex rounded-lg'>
            <div className='flex items-center' >
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    label="Female"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <p>OPD</p>
            </div>
            <div className='flex items-center'>
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    label="Female"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <p>PPD</p>
            </div>
        </div >
    );
}