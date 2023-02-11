import React, { useCallback } from 'react';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';

const Header: React.FC = () => {
  
  const lang = useLanguage();
  const data = dataset[lang];

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Eduardo Fertig Bastos</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            {
              data.map((topic, index) => (
                <li key={index} className="nav__item">
                  <a href={topic.href} className="nav__link active-link">
                      <i className={`${topic.icon} nav__icon`}></i> {topic.text}
                  </a>
                </li>
              ))    
            }
              
          </ul>
          <i className="uil uil-times nav__close nav__icon" id="nav-close"></i>
        </div>
        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
