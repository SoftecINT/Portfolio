import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import OurServices from './pages/OurServices'
import Ourclients from './pages/Ourclients'
import AboutUs from './pages/AboutUs'
import UiUxDesign from './pages/UiUxDesign'
import GraphicDesign from './pages/GraphicDesign'
import WebDevelopment from './pages/WebDevelopment'
import AppDevelopment from './pages/AppDevelopment'
import DigitalMarketing from './pages/DigitalMarketing'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/ourservices' element={<OurServices/>}/>
      <Route path='/ourclients' element={<Ourclients/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>


      {/* innner pages */}
      <Route path='/uiuxdesign' element={<UiUxDesign/>}/>
      <Route path='/graphicdesign' element={<GraphicDesign/>}/>
      <Route path='/webdevelopment' element={<WebDevelopment/>}/>
      <Route path='/appdevelopment' element={<AppDevelopment/>}/>
      <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
    </Routes>
  )
}

export default App