import React, {useEffect} from "react";
import "./../admin.scss";
import { Photos, Photo } from '../../../domain/photos-types';
import useFirebaseUpload from "./use-file-upload-hook";

interface PropsType {
  photos: Photos;
  onchangePhotoAdd: (photo: Photo) => void
}

const AdminFileInput= (props: PropsType) => {
  const [
    { data, isLoading, isError, progress },
    setFileData
  ] = useFirebaseUpload();

  useEffect(() => {
    if (data) {
      props.onchangePhotoAdd(data);
    }
  }, [data]) 
  
  return (
    <div>
      <input
        type="file"
        placeholder="Ajouter une photo"
        onChange={(e: any) => {
          setFileData(e.target.files[0]);
        }}
      />
        {isError && <div>ERROR: {isError.message}</div>}

        {isLoading && progress && (
          <div >progress : {progress.value} </div>
        ) }
    </div>
  );
};

export default AdminFileInput;
