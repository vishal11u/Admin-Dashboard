import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollUp() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [pathname])
    return null;
}
export default ScrollUp;