import React from 'react'
import HeroImage from '../../../assets/images/HeroImage.png'
import ResponsiveFooter from '../../molecules/ResponsiveFooter'
import WhyChooseUs from '../../molecules/HeroComponent'
import HeroSection from '../../molecules/HeroImageComponent'
import Testimonials from '../../molecules/Testimonials'
import TravelSection from '../../molecules/TravelSection'
// import CustomGlobe from '../../molecules/CustomGlobe'
import Header from '../../molecules/Header'
import GlobeComponent from '../../molecules/GlobeComponent';

const LandingPage = () => {
  const europeanCities = [
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', url: "/destination?country=France" },
    { lat: 52.5200, lng: 13.4050, name: "Berlin", country: "Germany", url: "/destination?country=Germany" },
    { lat: 41.9028, lng: 12.4964, name: "Rome", country: "Italy", url: "/destination?country=Italy" },
    { lat: 40.4168, lng: -3.7038, name: "Madrid", country: "Spain", url: "/destination?country=Spain" }
  ];

  return (
    <>
      <Header/>
      <HeroSection title={'Start your journey with us'} description={'Enjoy your holiday with us'} image={HeroImage}/>
      <WhyChooseUs/>
      
      {/* Globe Section with Custom Globe */}
      {/* <section className="py-12 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Discover <span className="text-blue-300">European</span> Destinations
          </h2>
          <div className="h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-blue-500/20">
            <CustomGlobe cities={europeanCities} continent="Europe" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-blue-200">Interactive 3D globe - hover over cities and click to explore</p>
          </div>
        </div>
      </section> */}
      <GlobeComponent cities={europeanCities} continent="Europe"/>
      <TravelSection title='Germany'/>
      <Testimonials/>
      <ResponsiveFooter/>
    </>
  )
}

export default LandingPage