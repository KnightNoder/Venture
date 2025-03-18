import React from 'react'
import Header from '../../molecules/Header'
import Footer from '../../molecules/Footer'
import HeroSection from '../../molecules/HeroImageComponent'
import image from '../../../assets/images/AboutUs.png'
import Travel from '../../organisms/Travel/Travel'
import FeaturesSection from '../../molecules/FeatureSection'
import PopularDestinations from '../../molecules/PopularDestinations'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <HeroSection title={"Contact us"} description={"Enjoy your holiday with us"} image={image}/>
        <Travel/>
        <FeaturesSection/>
        <PopularDestinations/>
        <Footer/>
    </div>
  )
}

export default AboutUs
