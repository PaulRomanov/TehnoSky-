import React from 'react'
import ContentMainPage from '../../components/ContentMainPage/ContentMainPage'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'

const MainPage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ContentMainPage />
      <Footer />
    </div>
  )
}

export default MainPage
