import React from 'react';
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

function Lofout() {
  const navigate = useNavigate();
  const Logout = () => {
    console.log("hello");
    navigate('/')
  }

  return (
    <div className='items-center flex px-2'>
      <button onClick={Logout}>
        <MdLogout size={30} />
      </button>
    </div>
  )
}

export default Lofout;