import React, { useCallback } from 'react';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';

const Header: React.FC = () => {
  
  const lang = useLanguage();
  const data = dataset[lang];

  const handleTheme = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const themeButton = e.target as HTMLDivElement;
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';
    
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
    
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }
    
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  }, []);
  
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
        <div className="nav__btns" onClick={handleTheme}>
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
