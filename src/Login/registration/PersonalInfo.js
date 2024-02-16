import React from 'react'
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function PersonalInfo({register,gender,errors,handleChangeGender}) {
  return (
    <div className=''>
      <div className='flex gap-2 h-full'>
        <div className='w-[30%] '>
          <Section1 register={register} errors={errors} handleChangeGender={handleChangeGender} gender={gender}/>
        </div>
        <div className='w-[30%] '>
          <Section2 />
        </div>
        <div className='w-[40%] '>
          <Section3 errors={errors}  register={register}/>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;