import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Sclice';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(logout());
    navigate('/login');
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
