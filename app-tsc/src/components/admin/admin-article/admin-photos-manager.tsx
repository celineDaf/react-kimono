import React, { useState } from "react";
import "./../admin.scss";
import { Photos, Photo } from '../../../domain/photos-types';
import AdminFileInput from "./admin-file-input";
import { PhotosDisplayer } from '../../../shared/photos-displayer/photos-displayer'
import { CarouselDisplayEnums } from '../../../domain/carousel-display-type'

interface PropsType {
  photos: Photos;
  onChangePhotos: (photos: Photos) => void
}

const AdminPhotosManager= (props: PropsType) => {

  const preview = CarouselDisplayEnums.PREVIEW;
  const [photos, setPhotos] = useState<Photos>(props.photos || []);

  const onchangePhotoAdd = (photo: Photo) => {
    setPhotos([...photos, photo]);
    props.onChangePhotos([...photos, photo]);
  }

  return (
    <div className="admin-photo-input column">
      <AdminFileInput  photos={props.photos} onchangePhotoAdd={onchangePhotoAdd}/>
      {
        photos && photos.length > 0 && <PhotosDisplayer photos={photos} type={preview}/>
      }
    </div>
  );
};

export default AdminPhotosManager;
