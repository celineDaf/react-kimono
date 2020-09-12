import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/storage";
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
      <img src={props.url} />
    </div>
  );
};

export default ImageDisplay;
