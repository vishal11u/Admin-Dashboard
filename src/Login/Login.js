import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [data, setData] = useState("");
    const [user, setUser] = useState("");

    const handleSubmit = () => {
        if (data.length === 0 || user.length === 0) {
            setError(true)
        } else {
            setError(false)
            navigate('/')
        }
    };

    return (
        <div>
            <div className='mt-[10%] flex justify-center '  >
                <form className='px-3 border md:px-16 py-8 rounded-lg shadow-lg '>
                    <div className='px-5  text-center text-4xl'>
                        <h1><span className='text-yellow-400 text-6xl' >Log</span>.in</h1><hr />
                    </div>
                    <div className="mt-5">
                        <label>Email Address*</label>
                        <input type="email" name="email" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Email' onChange={e => setData(e.target.value)} />
                    </div>

                    {error && data.length <= 0 ?
                        <label className='text-red-500 text-[13px]'>Email cannot be Empty</label> : ""}

                    <div className="mt-3">
                        <label>Password*</label>
                        <input type="password" name="password" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='🔐••••••' onChange={e => setUser(e.target.value)} />
                    </div>

                    {error && user.length <= 0 ?
                        <label className='text-red-500 text-[13px]'>Password cannot be Empty</label> : ""}

                    <div className='mt-3 items-center'>
                        <div className=''>
                            <input className='md:mr-2 mr-1' type='checkbox' />
                            <label for="full_name">Remember Me.</label>
                        </div>
                    </div>
                    <div className='mt-4 text-center'>
                        <button className='text-white px-24 bg-black md:px-40 py-3' type='button' onClick={handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;