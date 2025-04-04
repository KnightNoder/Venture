import React from 'react'
import Footer from '../../molecules/Footer'
import Header from '../../molecules/Header'
import HeroSection from '../../molecules/HeroImageComponent'
import ContactUsImage from '../../../assets/images/ContactUs.png'
import ContactForm from '../../molecules/ContactForm'
import SubscribeSection from '../../molecules/SubscribeSection'
import ResponsiveFooter from '../../molecules/ResponsiveFooter';


const Contact = () => {
  return (
    <div>
      <Header/>
      <HeroSection title={'Contact us'} description={"Let’s plan your next trip with us"} image={ContactUsImage}/>
      <ContactForm/>
      <SubscribeSection/>
      <ResponsiveFooter/>
    </div>
  )
}

export default Contact
