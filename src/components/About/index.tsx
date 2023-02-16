import React from 'react';

import encv from 'assets/resume/en_re.pdf';
import ptcv from 'assets/resume/pt_cv.pdf';
import { BsDownload } from 'react-icons/bs';

import { useLanguage } from 'hooks/language';

import dataset from './dataset';

const About: React.FC = () => {

  const { getLanguage } = useLanguage();
  const data = dataset[getLanguage()];

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{data.title}</h2>
      <span className="section__subtitle">{data.subtitle}</span>

      <div className="about__container container">
        <img src={data.photo} alt="Eu" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              {data.description}
              <br /><br />
              {data.description2}
            </p>
            
            <div className="about__info">
              {
                data.info.map((info, index) => (
                  <div key={index}>
                    <span className="about__info-title">{info.title}</span>
                    <span className="about__info-name">{info.name1} <br /> {info.name2}</span>
                  </div>
                ))
              }
            </div>
                

            <div className="about__buttons">
              <a href={getLanguage() === 'pt' ? ptcv : encv} 
                download={getLanguage() === 'pt' ? 'pt_cv.pdf' : 'en_cv.pdf'}
                rel="noreferrer"
                target="_blank" 
                className="button button--flex"
              >
                  Download CV<BsDownload className="button__icon"></BsDownload>
              </a>
            </div>
          </div>
      </div>
    </section>
  )
};

export default About;
