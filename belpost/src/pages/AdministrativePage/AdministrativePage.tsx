import React from 'react'
import ContentAdministrativePage from '../../components/ContentAdministrativePage/ContentAdministrativePage'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import './administrativePage.scss'

const AdministrativePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ContentAdministrativePage />
      <Footer />
    </div>
  )
}

export default AdministrativePage
