import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchDash() {
    return (
        <div className='flex items-center border bg-white text-black text-[17px] py-1.5 mx-5 rounded-3xl gap-1 px-2 overflow-hidden'>
            <CiSearch size={23}/>
            <input className='outline-none' type='text' placeholder='Search...' />
        </div>
    )
}

export default SearchDash