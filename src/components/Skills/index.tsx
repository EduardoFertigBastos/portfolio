import React, { useCallback, useState } from 'react';

import { FaAngleDown } from 'react-icons/fa';

import { useLanguage } from 'hooks/language';

import dataset from './dataset';

const Skills: React.FC = () => {

  const { getLanguage } = useLanguage();
  const data = dataset[getLanguage()];

  const [actives, setActives] = useState<number[]>([]);

  const handleStatus = useCallback((id: number) => {
    if (actives.includes(id)) {
      return setActives(actives.filter((active) => active !== id));
    } 
    
    setActives([...actives, id]);
  }, [actives]);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{ data.title }</h2>
      <span className="section__subtitle">{ data.subtitle }</span>

      <div className="skills__container container grid">
          {
            data.skills.map(({ icon: Icon, ...skill }, index1) => (

              // <div className="skills__content skills__close">

              <div key={index1} className={
                actives.includes(skill.id) 
                  ? 'skills__content skills__open'
                  : 'skills__content skills__close'
                }
                onClick={() => handleStatus(skill.id)}
              >
                <div className="skills__header">
                  <Icon className={`skills__icon`}></Icon>

                  <div>
                    <h1 className="skills__title">{skill.title}</h1>
                    <span className="skills__subtitle">{skill.subtitle}</span>
                  </div>

                  <FaAngleDown className="skills__arrow"></FaAngleDown>
                </div>

                <div className="skills__list grid">
                  {
                    skill.list.map((item, index2) => (
                      <div key={index2} className="skills__data">
                        <div className="skills__titles">
                          <h2 className="skills__name">{item.name}</h2>
                          <span className="skills__number">{item.level}%</span>
                        </div>
                        <div className="skills__bar">
                          <span className={`skills__percentage skills__${item.level}`}></span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            
            ))
          }

        </div>
    </section>
  )
};

export default Skills;
