import React from 'react';
import RightParent from '../Oppointment/RightParent';
import Selector from '../Oppointment/Selector'

function DashBoard() {
  return (
    <div>
      <div className='text-center text-2xl font-semibold mt-5'>
        <h1>Manage Consultation Charges</h1>
      </div>
      <div className='flex p-8 gap-3'>
        <div className='flex-[30%]'>
          <Selector />
        </div>
        <div className='bg-black w-[1px] border'></div>
        <div className='flex-[70%]'>
          <RightParent />
        </div>
      </div>
    </div>
  )
}

export default DashBoard;