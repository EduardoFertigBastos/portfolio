import React from 'react';

import { BiMouse } from 'react-icons/bi';
import { BsArrowDownShort } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';

const Home: React.FC = () => {

  const lang = useLanguage();
  const data = dataset[lang];

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {
              data.socialmedia.map(({ icon: Icon, ...social }, index) => (
                <a href={social.href} 
                  aria-label={`Link to ${social.label}`}
                  rel='noreferrer' 
                  key={index}
                  target="_blank" 
                  className="home__social-icon"
                >
                  <Icon></Icon>
                </a>
              ))
            }
            </div>
            <div className="home__img">
              <svg className="home__blob" 
                viewBox="0 0 200 187" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>

                  <image className="home__blob-img" x='-8' y='-8' xlinkHref={data.profilePhoto}
                   />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">{data.title}</h1>
              <h3 className="home__subtitle">{data.subtitle}</h3>
              <p className="home__description"> {data.description}</p>
              <a href="#contact" className="button button--flex">
                {data.contact} <FiSend className="button__icon"></FiSend>
              </a>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <BiMouse className="home__scroll-mouse"></BiMouse>
              <span className="home__scroll-name">{data.scroll}</span>
              <BsArrowDownShort className="home__scroll-arrow "></BsArrowDownShort>
            </a>
          </div>
        </div>
    </section>
  )
};

export default Home;
