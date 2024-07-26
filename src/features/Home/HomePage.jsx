import React from 'react'
import Banner from './Banner'
import Projects from './Projects'
import Recommendation from './Recommendation'
import LeaveMeYourInfo from './LeaveMeYourInfo'
import Footer from '../Footer'
import ContactInfo from './ContactInfo'

const HomePage = () => {
  return (
   <>
   <Banner/>
   <Projects/>
   <Recommendation/>
   <LeaveMeYourInfo/>
   <ContactInfo/>
   <Footer/>
   </>
  )
}

export default HomePage