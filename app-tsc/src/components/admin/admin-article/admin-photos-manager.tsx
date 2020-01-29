import React, { useState } from "react";
import "./../admin.scss";
import { Photos, Photo } from '../../../domain/photos-types'
import { PhotosDisplayer } from "../../../shared/photos-displayer/photos-displayer";
import AdminFileInput from "./admin-file-input";

interface PropsType {
  photos: Photos;
  onChangePhotos: (photos: Photos) => void
}

const AdminPhotosManager= (props: PropsType) => {

  const [photos, setPhotos] = useState<Photos>(props.photos || []);

  const onchangePhotoAdd = (photo: Photo) => {
    setPhotos([...photos, photo]);
    props.onChangePhotos([...photos, photo]);
  }

  return (
    <div className="admin-photo-input">
    <AdminFileInput  photos={props.photos} onchangePhotoAdd={onchangePhotoAdd}/>
    <PhotosDisplayer photos={photos} />
    </div>
  );
};

export default AdminPhotosManager;
