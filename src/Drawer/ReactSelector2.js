import React from 'react'
import Select from 'react-select'

const options = [
    { id: 1, value: 'chocolate', label: 'Chocolate' },
    { id: 2, value: 'strawberry', label: 'Strawberry' },
    { id: 3, value: 'vanilla', label: 'Vanilla' },
    { id: 4, value: 'blue', label: 'blue' },
    { id: 5, value: 'red', label: 'red' },
    { id: 6, value: 'black', label: 'black' },
    { id: 7, value: 'Indigo', label: 'Indigo' },
    { id: 8, value: 'Orange', label: 'Orange' },
]

const MyComponent2 = () => (
    <div className='mt-5'>
        <Select options={options} />
    </div>
)

export default MyComponent2;