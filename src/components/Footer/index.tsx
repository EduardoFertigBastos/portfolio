import React from 'react';

import { useLanguage } from 'hooks/language';

import dataset from './dataset';

const Footer: React.FC = () => {

  const { getLanguage } = useLanguage();
  const data = dataset[getLanguage()];

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <span className="footer__title">{data.name}</span>
            <br />
            <span className="footer__subtitle">{data.subtitle}</span>
          </div>

          <ul className="footer__links">
            {
              data.menu.map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={`Link to ${item.text}`} className="footer__link">{item.text}</a>
                </li>
              ))
            }
          </ul>

          <div className="footer__socials">
            {
              data.socialmedia.map(({ icon: Icon, ...item}, index) => (
                <a key={index} 
                  aria-label={`Link to ${item.label}`}
                  href={item.href} 
                  target="_blank" 
                  className="footer__social" 
                  rel="noreferrer"
                >
                  <Icon></Icon>
                </a>
              ))
            }
          </div>

        </div>
        <p className="footer__copy">
          Based on <a href="https://github.com/bedimcode/responsive-portfolio-website-Alexa" 
            target="_blank" rel="noreferrer"
          > Responsive Personal Website Alexa </a> 
          by <a href=" https://github.com/bedimcode" target="_blank" className='bedimcode'> Bedimcode </a>
          <br />
          Copyright &#169; Eduardo Fertig Bastos. All rights reserved.
            </p>
        </div>
    </footer>
  )
};

export default Footer;
