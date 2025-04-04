import React from 'react'
import Header from '../../molecules/Header'
import Footer from '../../molecules/Footer'
import HeroSection from '../../molecules/HeroImageComponent'
import image from '../../../assets/images/AboutUs.png'
import Travel from '../../organisms/Travel/Travel'
import FeaturesSection from '../../molecules/FeatureSection'
import PopularDestinations from '../../molecules/PopularDestinations'
import ResponsiveFooter from '../../molecules/ResponsiveFooter';
import WhyChooseUs from '../../molecules/HeroComponent'


const AboutUs = () => {
  return (
    <div>
        <Header/>
        <HeroSection title={"About us"} description={"Who we are"} image={image}/>
        <Travel/>
        <WhyChooseUs/>
        {/* <FeaturesSection/> */}
        <PopularDestinations/>
        <ResponsiveFooter/>
    </div>
  )
}

export default AboutUs
