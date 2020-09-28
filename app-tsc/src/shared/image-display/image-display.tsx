import React from "react";
import "./image-display.scss";

interface Props {
  url: string;
  title: string;
}

const ImageDisplay = (props: Props) => {
  if (!props.url) return null;
  return (
    <div className="image-display">
      <span className="title">{props.title}</span>
      <img src={props.url} alt={props.title} />
    </div>
  );
};

export default ImageDisplay;
