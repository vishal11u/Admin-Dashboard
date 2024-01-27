import React from 'react';
import Radio from './Radio';
import Radio2 from './Radio2';
import Selector2 from '../Drawer/ReactSelector2';

function Petient() {
  return (
    <div className='mt-5'>
      <div className='flex justify-around'>
        <Radio />
        <Radio2 />
      </div>
      <div>
        <Selector2 />
      </div>
    </div>
  )
}

export default Petient