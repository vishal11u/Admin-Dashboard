import React from 'react'
import { Link } from 'react-router-dom';

function SteperParent() {
  return (
    <div className='flex space-x-5 p-8'>
      <Link className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg' to='/setting/staffprofile/Country' type='button'>Country</Link>
      <Link className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg' to='/setting/staffprofile/state' type='button'>State</Link>
      <Link className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg' to='/setting/staffprofile/city' type='button'>City</Link>
    </div>
  )
}

export default SteperParent;