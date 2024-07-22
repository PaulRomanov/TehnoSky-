import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import './notFound.scss';

const NotFound = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className="wrapper-404">
        <nav>
          <NavLink exact activeClassName="activ-link" className="shine-button btn-404" to="/">
            Back to Home page
          </NavLink>
        </nav>
        <img className="img-404" src="assets/404.png" alt="404" />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
