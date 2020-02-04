import React, {useState, useEffect} from "react";
import { Photos } from '../../domain/photos-types'
import firebase from "../../firebase";
import "firebase/storage";
import "./photos-displayer";
import { Carousel } from "../carousel/carousel";

interface PropsType {
  photos: Photos;
}

export const PhotosDisplayer = (props: PropsType) => {
  const photos = props.photos;
  const [previews, setPreviews] = useState<string[]>([]);
  const storage = firebase.storage();

  const doUrlCall = photo => storage.ref().child(`images/${photo}`).getDownloadURL();
  
  const getOneUrlPromise = async photo =>  doUrlCall(photo);

  const getUrls = async () => {
    const results : Promise<any[]> = Promise.all(props.photos.map(photo => getOneUrlPromise(photo).catch(e => {console.log('ERROR GET URL PHOTO' , e); return e})))
    const validResults = (await results).filter(result => typeof result === 'string' );
    return validResults;
  }

  useEffect(() => {
    getUrls().then((urls) => { 
      setPreviews(urls);
    })
  }, [photos]) 

  if (!previews || previews.length === 0) return null;
  else return (
    <div className="container">
          <Carousel imgUrls={previews} />
    </div>
  );
};
