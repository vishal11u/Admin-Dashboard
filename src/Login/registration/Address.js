import React from 'react'
import Section4 from './sections/Section4';

function Address({errors,register}) {
  return (
    <div>
        <div className=''>
            <Section4 register={register} errors={errors}/>
        </div>
    </div>
  )
}

export default Address;