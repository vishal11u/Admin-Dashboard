import React from 'react';
import Nested from './Nested'

function FeedBack() {
  return (
    <div className='md:flex justify-center w-full space-x-28 mt-10'>
        <div className=''>
            <h1 className="text-left font-bold text-3xl">Please Select Feedback Form</h1>
            <p>Please share your review to improve our system. Thank You!</p>
            <img className='h-[70vh]' src='https://img.freepik.com/free-vector/online-review-concept-illustration_114360-2155.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt=''/>
        </div>
        <Nested/>
    </div>
  )
}

export default FeedBack