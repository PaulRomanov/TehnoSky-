import React from 'react';
import ContentAbout from '../../components/ContentAbout/ContentAbout';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

const About = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ContentAbout />
      <Footer />
    </div>
  );
};

export default About;
