import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";
import "firebase/storage";

import './image-display.scss'
interface Props {
    imageName: string
 }

 const ImageDisplay = (props: Props) => {
    const [imgUrl, setImgUrl] = useState<string>();
    const storage = firebase.storage();

    useEffect(() => {
        storage.ref().child(`images/${props.imageName}`).getDownloadURL().then((url) => {
            setImgUrl(url);
        });
    }, []);
    
    if (!imgUrl) return null;
    return (
        <img src={imgUrl}/>
    );

};

export default ImageDisplay;