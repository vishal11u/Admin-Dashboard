import React from 'react';
import QR from './My_2D_Barcode.png';

function QRgen() {
  return (
    <div className='h-full flex justify-center space-x-8 items-center'>
      <div className=''>
        <img className='h-[90vh] p-8' src='https://img.freepik.com/free-vector/qr-code-scanning-concept-with-characters-illustrated_23-2148633631.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' />
      </div>
      <div className='text-center'>
        <img className='h-[60vh] border-[7px] rounded-lg shadow-xl animate-bounce' src={QR} alt='' />
        {/* <h1 className='text-[20px] bg-black py-2 text-white mt-5 font-medium shadow-lg'>SCAN ME</h1> */}
      </div>
    </div>
  )
}

export default QRgen;