import React from 'react';
import './footer.scss';
import belSvg from '../../assets/belSvg.svg';
import tehnoskySvg from '../../assets/tehnoskySvg.svg';


const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer_content_info'>
        <p className='footer_info_about'>Национальный оператор почтовой связи Республики Беларусь </p>
        <img className='footer_info_about footer_info_svg' src={belSvg} alt='svg' />
        <p className='footer_info_about'>Покупайте белорусские товары на
          <a href='https://shop.belpost.by/' target="_blank">shop.belpost.by</a>
        </p>
      </div>
      <p className='footer_content'>
        <p className='footer_designed'>Разработано компанией</p>
        <img className='footer_designed footer_designed_svg' src={tehnoskySvg} alt='svg' />
        <p className='footer_designed'>
          <a href='https://high-tech.by/' target="_blank">High-tech.by</a>
        </p>
      </p>
    </div>
  );
};

export default Footer;
