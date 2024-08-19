import React, { useEffect, useState } from 'react'
import MiniDrawer from './Drawer/DrawerDash';
import Loader from './Login/Loader';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500)
  })

  return (
    <div className='bg-white'>
      {loader ? <Loader /> : <MiniDrawer />}
    </div>
  )
}

export default App;