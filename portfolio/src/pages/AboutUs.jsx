import { div } from 'framer-motion/client'
import React from 'react'
import AboutUsComp from '../components/AboutUs/AboutUsComp'
import Layout from '../components/Layout/Layout'
const AboutUs = () => {
  return (
    <div>
      <Layout>
        <AboutUsComp/>
      </Layout>
    </div>
  )
}

export default AboutUs