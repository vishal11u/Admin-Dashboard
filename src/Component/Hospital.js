import React from 'react';
import UserTable from '../CRUD/UsersDoctor';

function Hospital() {

  return (
    <div className='bg-gray-100 px-[10%] w-full h-full'>
      <div className=''>
        <UserTable />
      </div>
    </div>
  )
}

export default Hospital;