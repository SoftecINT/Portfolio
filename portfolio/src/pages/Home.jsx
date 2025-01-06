import React from 'react'
import ZoominZoomout from '../components/ZoominZoomout/ZoominZoomout'
import { Cards } from '../components/Cards/Cards'
import Ourblogs from '../components/Our Blogs/Ourblogs'
import Testimonials from '../components/Testimonials/Testimonials'
import { Footer } from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'
import OurService from '../components/Services/OurService'


const Home = () => {
  return (
    <div>
        <Layout>
        <ZoominZoomout/>
        <OurService/>
        <Cards/>
        <Ourblogs/> 
        <Testimonials/>
        <Footer/>
        </Layout>
    </div>
  )
}

export default Home