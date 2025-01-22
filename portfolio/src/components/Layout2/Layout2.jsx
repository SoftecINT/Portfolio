import React from 'react'
import Navbar2 from '../Navbar2/Navbar2'

const Layout2 = ({children}) => {
  return (
    <div>
        <Navbar2/>
        {children}
    </div>
  )
}

export default Layout2