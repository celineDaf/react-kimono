import React, {useState, useEffect} from "react";
import { Photos } from '../../domain/photos-types'
import firebase from "../../firebase";
import "firebase/storage";
import "./photos-displayer.scss"
import { Carousel } from "../carousel/carousel";
import {FirebaseStorageError } from '../../components/admin/article-actions'

interface PropsType {
  photos: Photos;
}

export const PhotosDisplayer = (props: PropsType) => {
  const photos = props.photos;
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const storage = firebase.storage();
  const [errors, setErrors] = useState<FirebaseStorageError[]>([]);

  const doUrlCall = photo => storage.ref().child(`images/${photo}`).getDownloadURL();
  
  const getOneUrlPromise = async photo =>  doUrlCall(photo);

  const getUrls = async () =>  {
    const results : Promise<any[]> = Promise.all(props.photos.map(photo => getOneUrlPromise(photo).catch(e => {console.log('ERROR GET URL PHOTO' , e); return e as FirebaseStorageError})))
    const validResults = (await results).filter(result => typeof result === 'string' );
    const errors = (await results).filter(result => typeof result !== 'string' );
    return {validResults, errors};
  }

  useEffect(() => {
    getUrls().then((results) => { 
      setImgUrls(results.validResults);
      setErrors(results.errors);
    }).catch((errs) => console.log('errors catch', errs))
  }, [photos]) 

if (errors && errors.length > 0) {
  return (<div className="firebase-error"> 
    {errors.map((erro, key) => (
<div key={key}>{key+1} ==> {erro.message}</div>
    ))}
  </div>) 
  }
  if (!imgUrls || imgUrls.length === 0) return null;
  else return (
    <div className="container">
          <Carousel imgUrls={imgUrls}/>
    </div>
  );
};
