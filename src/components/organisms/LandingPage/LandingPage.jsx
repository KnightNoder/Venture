import React from 'react'
import HeroImage from '../../../assets/images/HeroImage.png'
import Footer from '../../molecules/Footer'
import WhyChooseUs from '../../molecules/HeroComponent'
import HeroSection from '../../molecules/HeroImageComponent'
import Testimonials from '../../molecules/Testimonials'
import TravelSection from '../../molecules/TravelSection'
import GlobeComponent from '../../molecules/GlobeComponent'
import TestGlobe from '../../molecules/TestGlobe'
import Header from '../../molecules/Header'


const LandingPage = () => {
  const cities = [
    { lat: 48.8566, lng: 2.3522, name: 'Paris, France', url: "/destination?country=France", country: "France" },
    { lat: 52.5200, lng: 13.4050, name: "Berlin, Germany", url: "/destination?country=Germany", country: "Germany" },
    { lat: 41.9028, lng: 12.4964, name: "Rome, Italy", url: "/destination?country=Italy", country: "Italy" },
    { lat: 40.4168, lng: -3.7038, name: "Madrid, Spain", url: "/destination?country=Spain", country: 'Spain' }
  ];
  
  return (
      <>
      <Header/>
      <HeroSection title={'Start your journey with us'} description={'Enjoy your holiday with us'} image={HeroImage}/>
      <WhyChooseUs/>
      <GlobeComponent cities={cities} continent='Europe'/>
      <TravelSection title='Germany'/>
      <Testimonials/>
      <Footer/>
      </>
    )
}

export default LandingPage
