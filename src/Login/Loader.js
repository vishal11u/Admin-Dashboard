import React from 'react';
import { bouncy } from 'ldrs';

function Loader() {
    bouncy.register();

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <l-bouncy
                size="60"
                speed="1.75"
                color="black"
            ></l-bouncy>
        </div>
    )
}

export default Loader;