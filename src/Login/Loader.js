import React from 'react';
import { cardio } from 'ldrs'

function Loader() {
    cardio.register()

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <l-cardio
                size="70"
                stroke="4"
                speed="1.5"
                color="black"
            ></l-cardio>
        </div>
    )
}

export default Loader;