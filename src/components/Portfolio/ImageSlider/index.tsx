import React, { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


import ModalImage from '../ModalProject/ModalImage';

import { Bolinha, ContainerBolinhas, Img, LeftArrow, RightArrow, Slider,  } from './styles';

interface IImageSliderProps {
  slides: string[];
  title: string;
}

const ImageSlider: React.FC<IImageSliderProps> = ({ slides, title, ...rest }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  function goToPrevious()
  {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  
  function goToNext()
  {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <Slider>
        {currentIndex !== 0 && slides.length > 0 &&
          <LeftArrow onClick={goToPrevious}>
            <IoIosArrowBack />
          </LeftArrow>
        }
        {currentIndex !== slides.length - 1 && slides.length > 0 &&
          <RightArrow onClick={goToNext}>
            <IoIosArrowForward />
          </RightArrow>

        }
        
        <Img src={slides[currentIndex]} 
          alt={`${title}-${currentIndex}`} 
          onClick={() => setOpen(true)}/>
      </Slider>
      <ContainerBolinhas>
        {slides.map((slide, index) => (
          <Bolinha key={index} 
            active={index === currentIndex} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </ContainerBolinhas>
      <ModalImage 
          isOpen={open} 
          setIsOpen={setOpen}
          image={slides[currentIndex]}
        />
    </>

  );
}
export default ImageSlider;
