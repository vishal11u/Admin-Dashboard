import React, { useState } from 'react'
import Deparment from '../Oppointment/Selector'
import ConsultationCharges from '../Oppointment/RightParent'

function ManageConsultation() {
  const [selectedDepData, setSelectedDepData] = useState([]);
  return (
    <div className='px-5 bg-gray-100 w-full h-full'>
      <h1 className=' text-center text-[30px] py-2 font-bold text-black'>Manage Consultation Charge</h1>
      <div className='flex justify-around space-x-4 border py-5 px-5 rounded-lg shadow-lg bg-white'>
        <div className='w-[22%]'>
          <Deparment selectedDepData={selectedDepData} setSelectedDepData={setSelectedDepData} />
        </div>
        <div className='border bg-black'></div>
        <div className='w-[78%]'>
          <ConsultationCharges selectedDepData={selectedDepData} />
        </div>
      </div>
    </div>
  )
}

export default ManageConsultation;