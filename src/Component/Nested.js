import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

function Nested() {
  
  return (
    <div>
      <div className='w-full border-2 rounded-md max-h-screen p-5'>
        <ul className='flex justify-around space-x-5'>
          <Link to="consult"><li className='p-2 text-[8px] md:w-32 md:text-base border-2 border-[#3F2860] rounded-xl text-center'>Consultant</li></Link>
          <Link to="staff"><li className='p-2 text-[8px] md:w-32 border-2 md:text-base border-[#3F2860] rounded-xl text-center'>Staff</li></Link>
          <Link to="patient"><li className='p-2 md:w-32 text-[8px] border-2 md:text-base  border-[#3F2860] rounded-xl text-center'>Patient</li></Link>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Nested;