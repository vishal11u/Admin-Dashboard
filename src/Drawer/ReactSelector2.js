import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
import { FaSearch } from 'react-icons/fa';

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FaSearch className='text-black' />
      </components.DropdownIndicator>
    )
  );
};

const options = [
  { id: 1, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/feedback/answer' },
  { id: 2, value: 'Pathology template for consultant', label: 'Pathology template for consultant', path: '/feedback/answer' },
  { id: 3, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/feedback/answer' },
  { id: 4, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/feedback/answer' },
  { id: 5, value: 'Pathology template for consultant', label: 'Pathology template for consultant', path: '/feedback/answer' },
  { id: 6, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/feedback/answer' },
  { id: 7, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/feedback/answer' },
  { id: 8, value: 'Pathology template for consultant', label: 'Pathology template for consultant', path: '/feedback/answer' },
  { id: 9, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/feedback/answer' },

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
      <Select
        options={options}
        onChange={handleSelectChange}
        menuIsOpen
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default MyComponent2;
