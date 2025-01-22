import React from 'react'
import ZoominZoomout from '../components/ZoominZoomout/ZoominZoomout'
import { Cards } from '../components/Cards/Cards'
import Ourblogs from '../components/Our Blogs/Ourblogs'
import Testimonials from '../components/Testimonials/Testimonials'
import { Footer } from '../components/Footer/Footer'
import OurService from '../components/Services/OurService'
import Layout2 from '../components/Layout2/Layout2'



const Home = () => {
  return (
    <div>
        <Layout2>
        <ZoominZoomout/>
        <OurService/>
        <Cards/>
        <Ourblogs/> 
        <Testimonials/>
        <Footer/>
        </Layout2>
    </div>
  )
}

export default Home