import React, { useCallback, useState } from 'react';

import { BiRightArrowAlt } from 'react-icons/bi';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';
import Project from './interface/Project';
import ModalProject from './ModalProject';
import ModalImage from './ModalProject/ModalImage';

const LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION = 220;

const Portfolio: React.FC = () => {

  const lang = useLanguage();
  const data = dataset[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [image, setImage] = useState<string>();
  const [project, setProject] = useState<Project>();


  const getDescriptionText = useCallback((description: string) => {
    if (description.length <= LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION) {
      return description;
    }
    let reduced = description.slice(0, LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION);
    let lastOccurrence = reduced.lastIndexOf(" ");
    let result = reduced.substring(0, lastOccurrence);

    return result + '...';
  }, [LIMIT_CHARACTERS_TO_SHOW_ON_RESUMED_DESCRIPTION]);
  
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

      <div className="portfolio__container container">
        {
          data.projects.map((project, index) => (
            <div key={index} className="portfolio__content grid">
              <figure className="portfolio__figure">
                <img src={ project.images[0] } 
                  alt={ project.images[0] } 
                  className="portfolio__img" 
                  onClick={() => {
                    setIsOpenImage(true)
                    setImage(project.images[0])
                  }}
                />
              </figure>
              <div className="portfolio__data">
                <h3 className="portfolio__title">{ project.title }</h3>
                <p className="portfolio__description">
                  { 
                    getDescriptionText(project.description)
                  }
                </p>
                <button
                  className="button button--flex button--small portfolio__button"
                  onClick={() => handleSeeMore(project)}
                >
                  { data.seemore }
                  <BiRightArrowAlt className="button__icon"></BiRightArrowAlt>
                </button>
                
              </div>
            </div>
          ))
        }
        
        <ModalImage 
          isOpen={isOpenImage} 
          setIsOpen={setIsOpenImage}
          image={image as string}
        />

        <ModalProject 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          project={project}
        />

      </div>
    </section>
  )
};

export default Portfolio;
