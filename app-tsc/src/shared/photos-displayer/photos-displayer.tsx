import React, { useState, useEffect } from "react";
import "./photos-displayer.scss";
import { Carousel } from "../carousel/carousel";
import { CarouselDisplay } from "../../domain/carousel-display-type";
import { IPrismicImage } from '../../domain/priscmic-types';


interface PropsType {
  photos: IPrismicImage[];
  type?: CarouselDisplay;
}

export const PhotosDisplayer = (props: PropsType) => {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = props.photos.map((p) => p.url);
    setImgUrls(urls);
  }, [props.photos])

  if (!imgUrls || imgUrls.length === 0) return null;
  else return <Carousel imgUrls={imgUrls} type={props.type} />;
};
