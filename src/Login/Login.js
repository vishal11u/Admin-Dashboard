import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../Firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState(false);
    const [notify, setNotify] = useState('');
    const [click, setClick] = useState(null);
    console.log(notify);
    console.log(click);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data, user);
            console.log("register", userCredential.user);
            setNotify("create")
            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            navigate('/')
            props.setUserLogin(false)
        } catch (err) {
            console.log(err);
            toast.warning('Alredy Have Account', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        if (data.length === 0 || user.length === 0) {
            setError(true)
        } else {
            setError(false)
        }
    };

    const goggleSubmit = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) => {
            setClick(result.user.email)
            localStorage.setItem("email", result.user.email);
            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            navigate('/')
            props.setUserLogin(false)
        }).catch((arr) => {
            console.log(arr);
        })
    }

    return (
        <div className='mt-[6%] pb-5 md:flex flex-wrap justify-center '  >
            <div className=''>
                <img className='md:h-[61vh]' src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr />
            </div>

            <form className='px-3 md:px-16 py-4 '>
                <div className='px-5  text-center text-4xl'>
                    <h1><span className='text-yellow-400 text-6xl' >Login</span>.in</h1><hr />
                </div>
                <div className="mt-6">
                    <label>Email Address*</label>
                    <input type="email" name="email" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Email' onChange={e => setData(e.target.value)} />
                </div>

                {error && data.length <= 0 ?
                    <label className='text-red-500 text-[13px]'>Email cannot be Empty</label> : ""}

                <div className="mt-4">
                    <label>Password*</label>
                    <input type="password" name="password" className="h-10 px-1 border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='🔐••••••' onChange={e => setUser(e.target.value)} />
                </div>

                {error && user.length <= 0 ?
                    <label className='text-red-500 text-[13px]'>Password cannot be Empty</label> : ""}

                <div className='mt-3'>
                    <div className=''>
                        <input className='md:mr-2 mr-1' type='checkbox' onChange={e => setUser(e.target.value)} />
                        <label for="full_name">Remember Me.</label>
                    </div>
                </div>
                <div className='mt-4 text-center'>
                    <button className='text-white px-24 bg-black md:px-40 py-3' type='button' onClick={handleSubmit}>Login</button>
                </div>
                <div className='flex justify-center mt-3'>
                    <button class="px-6 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={goggleSubmit}>
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" />
                        <span>Login with Google</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;