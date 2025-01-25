import React from 'react'
import ContactUsComp from '../components/ContactUs/ContactUsComp'
import Layout from '../components/Layout/Layout'
import {Footer} from '../components/Footer/Footer'

const Contactus = () => {
  return (
    <div>
      <Layout>
        <ContactUsComp/>
        </Layout>
        <Footer/>
    </div>
    
  )
}

export default Contactus