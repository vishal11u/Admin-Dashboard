import React from 'react';
import UsersDoctor from '../CRUD/UsersDoctor';

function Hospital() {

  return (
    <div className='bg-gray-100 p-12 h-screen'>
      <div className='mt-5'>
        <UsersDoctor />
      </div>
    </div>
  )
}

export default Hospital;