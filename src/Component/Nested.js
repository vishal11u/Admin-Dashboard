import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nested() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className='w-full shadow-lg border-2 rounded-md h-[70vh] p-5'>
        <ul className='flex justify-around space-x-5'>
          <Link to="/">
            <button type='submit' onClick={() => handleButtonClick('Consultant')}
              className={`py-2 px-3 text-[8px] md:w-32 md:text-base shadow-lg border rounded-lg text-center ${activeButton === 'Consultant' ? 'bg-black text-white' : ''  }`} >
              Consultant
            </button>
          </Link>
          <Link to="staff">
            <button type='submit' onClick={() => handleButtonClick('Staff')}
              className={`py-2 px-3 text-[8px] md:w-32 shadow-lg border md:text-base rounded-lg text-center ${activeButton === 'Staff' ? 'bg-black text-white' : '' }`} >
              Staff
            </button>
          </Link>
          <Link to="patient">
            <button type='submit' onClick={() => handleButtonClick('Patient')}
              className={`py-2 px-3 md:w-32 text-[8px] shadow-lg border md:text-base rounded-lg text-center ${activeButton === 'Patient' ? 'bg-black text-white' : '' }`} >
              Patient
            </button>
          </Link>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Nested;
