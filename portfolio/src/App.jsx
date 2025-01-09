import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import OurServices from './pages/OurServices'
import Ourclients from './pages/Ourclients'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/ourservices' element={<OurServices/>}/>
      <Route path='/ourclients' element={<Ourclients/>}/>
    </Routes>
  )
}

export default App