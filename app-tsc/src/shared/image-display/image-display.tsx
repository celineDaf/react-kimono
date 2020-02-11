import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";
import "firebase/storage";
interface Props {
    imageName: string,
    title
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
        <div>
            <span className="title">{props.title}</span>
        <img src={imgUrl}/>
        </div>
    );

};

export default ImageDisplay;