import React, {useState} from 'react';
import './carousel.scss';

 interface PropsType {
 imgUrls: string[],
 type?:'preview' | 'classic'
}

export const Carousel = ( props: PropsType) => {
  const slides = props.imgUrls;
  const length = slides.length;
  const [activeIndex, setActiveIndex] = useState<number>(length > 0 ? -1 : 0) 

  const goToNextSlide = () => {
    let index: number;
    if (slides.length === 1) index = 0
    else if (slides.length === activeIndex + 1 ) index = 0 
    else {index = activeIndex + 1}

    setActiveIndex(index);
  }

  return (
    length > 0 ? (
      <div className="carousel">
        <div className="carouselContent" onClick={goToNextSlide}>
                {slides.map((slide, index) => 
                  <CarouselChild key={index} slide={slide} 
                    type={props.type || "classic"}
                    mainSlide={index === activeIndex} 
                    subSlide={index === activeIndex -1 || index === activeIndex +1}  />
                )}
        </div>
      </div>
    ): null
  );
};

export interface CarouselChildProps {
    type: 'preview' | 'classic',
    slide: string,
    key: number,
    mainSlide: Boolean,
    subSlide: Boolean
}

export const CarouselChild = ( props: CarouselChildProps) => (
  <div className="carouselItem">
      <img className={`${props.type} ${'mainSlide'}`} src={props.slide} />
    </div>
);