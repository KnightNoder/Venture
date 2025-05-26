import React from 'react'
import HeroImage from '../../../assets/images/HeroImage.png'
import ResponsiveFooter from '../../molecules/ResponsiveFooter'
import WhyChooseUs from '../../molecules/HeroComponent'
import HeroSection from '../../molecules/HeroImageComponent'
import Testimonials from '../../molecules/Testimonials'
import TravelSection from '../../molecules/TravelSection'
// import CustomGlobe from '../../molecules/CustomGlobe'
import Header from '../../molecules/Header'
import EuropeanMapComponent from '../../molecules/MapComponent'
import EuropeanMapComponent2 from '../../molecules/LeafletMap'
import EuropeanMapComponent3 from '../../molecules/LeafletMap2'
import GlobeComponent from '../../molecules/GlobeComponent';

const LandingPage = () => {
  const europeanCities = [
    // Original countries
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', url: "/destination?country=France" },
    { lat: 52.5200, lng: 13.4050, name: "Berlin", country: "Germany", url: "/destination?country=Germany" },
    { lat: 41.9028, lng: 12.4964, name: "Rome", country: "Italy", url: "/destination?country=Italy" },
    { lat: 40.4168, lng: -3.7038, name: "Madrid", country: "Spain", url: "/destination?country=Spain" },
    
    // New European countries
    { lat: 47.1660, lng: 9.5554, name: 'Vaduz', country: 'Liechtenstein', url: "/destination?country=Liechtenstein" },
    { lat: 49.6116, lng: 6.1319, name: 'Luxembourg City', country: 'Luxembourg', url: "/destination?country=Luxembourg" },
    { lat: 35.8997, lng: 14.5147, name: 'Valletta', country: 'Malta', url: "/destination?country=Malta" },
    { lat: 43.7384, lng: 7.4246, name: 'Monaco', country: 'Monaco', url: "/destination?country=Monaco" },
    { lat: 42.4304, lng: 19.2594, name: 'Podgorica', country: 'Montenegro', url: "/destination?country=Montenegro" },
    { lat: 52.3676, lng: 4.9041, name: 'Amsterdam', country: 'Netherlands', url: "/destination?country=Netherlands" },
    { lat: 59.9139, lng: 10.7522, name: 'Oslo', country: 'Norway', url: "/destination?country=Norway" },
    { lat: 38.7223, lng: -9.1393, name: 'Lisbon', country: 'Portugal', url: "/destination?country=Portugal" },
    { lat: 48.1486, lng: 17.1077, name: 'Bratislava', country: 'Slovakia', url: "/destination?country=Slovakia" },
    { lat: 46.0569, lng: 14.5058, name: 'Ljubljana', country: 'Slovenia', url: "/destination?country=Slovenia" },
    { lat: 59.3293, lng: 18.0686, name: 'Stockholm', country: 'Sweden', url: "/destination?country=Sweden" },
    { lat: 46.9480, lng: 7.4474, name: 'Bern', country: 'Switzerland', url: "/destination?country=Switzerland" },
    { lat: 51.5074, lng: -0.1278, name: 'London', country: 'United Kingdom', url: "/destination?country=United Kingdom" },
    { lat: 41.9029, lng: 12.4534, name: 'Vatican City', country: 'Vatican City', url: "/destination?country=Vatican City" }
  ];

  return (
    <>
      <Header/>
      <HeroSection title={"Experience the places you've always dreamed of"} description={'Customized trips designed from India to Europe & beyond'} image={HeroImage}/>
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
      {/* <EuropeanMapComponent/> */}
      {/* <EuropeanMapComponent2/> */}
      {/* <EuropeanMapComponent3/> */}
      <TravelSection title='Germany'/>
      {/* <Testimonials/> */}
      <ResponsiveFooter/>
    </>
  )
}

export default LandingPage