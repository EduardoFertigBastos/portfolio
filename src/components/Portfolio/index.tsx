import React, { useCallback, useState } from 'react';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';
import Project from './interface/Project';
import ModalProject from './ModalProject';

const LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION = 197;

const Portfolio: React.FC = () => {

  const lang = useLanguage();
  const data = dataset[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<Project>();


  const handleSeeMore = useCallback((project:any) => {
    setIsOpen(true);
    setProject(project);
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">{data.title}</h2>
      <span className="section__subtitle">
        <a href="#a">
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
                  <img src={ project.images[0] } 
                    alt={ project.images[0] } 
                    className="portfolio__img" 
                  />
                </figure>
                <div className="portfolio__data">
                  <h3 className="portfolio__title">{ project.title }</h3>
                  <p className="portfolio__description wrap_portfolio">
                    { 
                      project.description.length > LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION 
                        ? project.description.slice(
                            0, LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION
                          ) + '...'
                        : project.description
                    }
                  </p>
                  <button
                    className="button button--flex button--small portfolio__button"
                    onClick={() => handleSeeMore(project)}
                  >
                    { data.seemore }
                    <i className="uil uil-arrow-right button__icon"></i>
                  </button>
                  
                </div>
              </div>
            ))
          }
          
          <ModalProject 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            project={project}
          />

        </div>
      </div>
    </section>
  )
};

export default Portfolio;
