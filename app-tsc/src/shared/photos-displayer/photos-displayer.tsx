import React, { useState, useEffect } from "react";
import "./photos-displayer.scss";
import { Carousel } from "../carousel/carousel";
import { CarouselDisplay } from "../../domain/carousel-display-type";
import { IPrismicImage } from '../../domain/prismic-types';


interface PropsType {
  photos: Array<{ image: IPrismicImage, text: any }>;
  type?: CarouselDisplay;
}

export const PhotosDisplayer = (props: PropsType) => {
  const [content, setContent] = useState<ISlideContent[]>([]);
  useEffect(() => {
    setContent(props.photos.map((p) => { return { url: p.image.url, text: p.text } }));
  }, [])

  if (!content || content.length === 0) return null;
  else return <Carousel content={content} type={props.type} />;
};

export interface ISlideContent {
  url: string, text: any[]
}