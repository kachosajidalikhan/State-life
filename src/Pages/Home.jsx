import React from 'react'
import Header from '../components/Header'
import Property_types from '../components/Property_types'
import Property_deals from '../components/Property_deals'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Points from '../components/Points'
import TestimonialCarousel from '../components/Testimonials'
import Testimonials from '../components/Testimonials'
import PropertyCarousel from '../components/PropertyCarousel'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div>
      <HeroSection />
      <Property_types />
      <Property_deals />
      <AboutUs />
      <Services />
      <Points />
      <Testimonials />
      <PropertyCarousel />
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default Home
