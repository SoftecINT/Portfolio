import React from 'react'
import ZoominZoomout from '../components/ZoominZoomout/ZoominZoomout'
import { Cards } from '../components/Cards/Cards'
import Ourblogs from '../components/Our Blogs/Ourblogs'
import Testimonials from '../components/Testimonials/Testimonials'
import { Footer } from '../components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <ZoominZoomout/>
        <Cards/>
        <Ourblogs/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home