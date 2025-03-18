import React from 'react'
import Footer from '../../molecules/Footer'
import Header from '../../molecules/Header'
import HeroSection from '../../molecules/HeroImageComponent'
import ContactUsImage from '../../../assets/images/ContactUs.png'
import ContactForm from '../../molecules/ContactForm'
import SubscribeSection from '../../molecules/SubscribeSection'

const Contact = () => {
  return (
    <div>
      <Header/>
      <HeroSection title={'Contact us'} description={'Enjoy your holiday with us'} image={ContactUsImage}/>
      <ContactForm/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default Contact
