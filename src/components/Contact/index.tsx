import React, { useCallback } from 'react';

import { useLanguage } from 'hooks/useLanguage';

import dataset from './dataset';

const Contact: React.FC = () => {

  const lang = useLanguage();
  const data = dataset[lang];

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{ data.title }</h2>
      <span className="section__subtitle">{ data.subtitle }</span>

      <div className="contact__container container grid">
        <div>
          
          {
            data.socialmedia.map((social, index) => (
              <div key={index} className="contact__information">
                <a href={social.href} target="_blank" rel="noreferrer">
                  <i className={`${social.icon} contact__icon`}></i>
                </a>
                <div>
                  <h3 className="contact__title">
                    { social.label }
                  </h3>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <span className="contact__subtitle">
                      { social.subtitle }
                    </span>
                  </a>
                </div>
              </div>
            ))
          }
          <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                  <h3 className="contact__title">
                    { data.address.label }
                  </h3>
                  <span className="contact__subtitle">
                    { data.address.location }
                  </span>
              </div>
          </div>
        </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
            
              <div className="contact__content">
                <label htmlFor="name" 
                  className="contact__label"
                > 
                  { data.form.name }
                </label>
                <input type="text" 
                  className="contact__input" 
                  name='name'
                />
              </div>

              <div className="contact__content">
                <label htmlFor="email" 
                  className="contact__label"
                >
                  { data.form.email }
                </label>
                <input type="email" 
                  className="contact__input" 
                  name='email'
                />
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="project" 
                className="contact__label"
              >
                { data.form.project }
              </label>
              <input type="text" 
                className="contact__input" 
                name='project'
              />
            </div>
            
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">
                { data.form.message }
              </label>
              <textarea name="message" 
                id="message" 
                cols={0} 
                rows={7} 
                className="contact__input"
              ></textarea>
            </div>

            <div>
              <a href={data.socialmedia.filter(el => el.label === 'Email')[0].href} 
                className="button button--flex">
                { data.form.button }
                <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
      </div>
  </section>
  )
};

export default Contact;
