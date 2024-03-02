import React from 'react';
import UserTable from '../CRUD/Patienttable';

function Hospital() {

  return (
    <div className=' py-[3%] px-[10%] w-full h-[100vh]'>
      <div className=''>
        <UserTable />
      </div>
    </div>
  )
}

export default Hospital;