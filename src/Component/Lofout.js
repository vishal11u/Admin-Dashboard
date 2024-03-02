import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {} from '../redux/Slice'

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    // navigate('/login');
  };

  return (
    <div className='items-center flex pl-3'>
      <button onClick={handleLogout}>
        <MdLogout size={30} />
      </button>
    </div>
  );
}

export default Logout;
