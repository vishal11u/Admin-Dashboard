import React, { useEffect, useState } from 'react'
import MiniDrawer from './Drawer/DrawerDash';
import Loader from './Login/Loader';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  })

  return (
    <div>
      {loader ? <Loader /> : <MiniDrawer />}
    </div>
  )
}

export default App;