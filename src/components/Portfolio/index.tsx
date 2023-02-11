import React, { useCallback } from 'react';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';

const Portfolio: React.FC = () => {

  const lang = useLanguage();
  const data = dataset[lang];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">{data.title}</h2>
      <span className="section__subtitle">
        <a href="#">
          { data.subtitle1 }
        </a> 
        { data.subtitle2 }
      </span>

      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">

          {
            data.projects.map((project, index) => (
              <div key={index} className="portfolio__content grid swiper-slide">
                <figure className="portfolio__figure">
                  <img src={ project.image.url } 
                    alt={ project.image.alt } 
                    className="portfolio__img" 
                    />
                  <figcaption className="portfolio__caption">
                    {project.image.alt} 
                  </figcaption>
                </figure>
                <div className="portfolio__data">
                  <h3 className="portfolio__title">{ project.data.title }</h3>
                  <p className="portfolio__description">
                    { project.data.description }
                  </p>
                  <a href={ project.data.github } 
                    rel="noreferrer"  
                    target="_blank" 
                    className="button button--flex button--small portfolio__button"
                  >
                    { data.seemore }
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            ))
          }
          

          <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Portfolio;
