import React from 'react'
import HeroSection from '../../molecules/HeroImageComponent'
import {useLocation } from 'react-router-dom';
import Header from '../../molecules/Header';
import CountryInfo from '../../molecules/CountryInfo';
import TravelPage from '../../molecules/TouristPlaces';
import TravelSection from '../../molecules/TravelSection';
import Footer from '../../molecules/Footer';
import CountryOverview from '../../molecules/CountryOverview';
import HistoryAndCulture from '../../molecules/HistoryAndCulture';
import image from "../../../assets/images/EnglandCover.png";
import DesktopTabletFooter from '../../molecules/DesktopFooter';
import ResponsiveFooter from '../../molecules/ResponsiveFooter';


const Destination = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const country   = queryParams.get('country');
  return (
    <>
      <Header/>
      <HeroSection title={"Services"} description={"Enjoy your holiday with us"} image={image} />
      <CountryOverview/>
      <HistoryAndCulture/>
      <TravelPage/>
      <TravelSection title={country}/>
      <ResponsiveFooter/>
    </>
  )
}

export default Destination
