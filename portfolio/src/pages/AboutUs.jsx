import { div } from 'framer-motion/client'
import React from 'react'
import AboutUsComp from '../components/AboutUs/AboutUsComp'
import Layout from '../components/Layout/Layout'
import {Footer} from '../components/Footer/Footer'

const AboutUs = () => {
  return (
    <div>
      <Layout>
        <AboutUsComp/>
      </Layout>
      <Footer/>
    </div>
  )
}

export default AboutUs