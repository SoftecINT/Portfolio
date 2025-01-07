import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contactus from './pages/Contactus'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
    </Routes>
  )
}

export default App