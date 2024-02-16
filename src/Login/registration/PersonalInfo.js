import React from 'react'
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function PersonalInfo() {
  return (
    <div className=''>
      <div className='flex gap-2 h-full'>
        <div className='w-[30%] '>
          <Section1 />
        </div>
        <div className='w-[30%] '>
          <Section2 />
        </div>
        <div className='w-[40%] '>
          <Section3 />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;