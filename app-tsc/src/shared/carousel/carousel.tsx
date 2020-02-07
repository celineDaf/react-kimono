import React,{ useState, useEffect } from 'react';
import "./carousel.scss";

interface PropsType {
  imgUrls: string[];
  type?: "preview" | "classic";
}

export const Carousel = (props: PropsType) => {
  const slides: string[] =props.imgUrls ;
  const length = slides.length;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const type = props.type || "classic";
  const nextSlide = () => {
    console.log('click', 'currentSlide', currentSlide);
      const nextSlide = currentSlide + 1 === length -1 ? 0 : currentSlide +1;
      setCurrentSlide(nextSlide);
  }

  return (
    <div className={'carousel ' + type } >
     <div className='slide-container'>
        {slides.map((slide, key) => (
           <div className="slide"
              style={{'opacity': key === currentSlide || type === 'preview' ? 1 : 0,
              'cursor': key === currentSlide || type === 'preview'? 'pointer' : 'none',
              'zIndex': key === currentSlide || type === 'preview'? 10 : 0}} 
               key={key} onClick={nextSlide}>
              <img  src={slide}  alt={'Slide ' + key}/>
             {type === 'classic' && <span className='counter' >{key+1} / {length}</span>}
          </div>
          ))}
          </div>
    </div>
  )
};
