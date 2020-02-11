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
    <div className="column admin-file-input">
      <input
        type="file" id="file"
        onChange={(e: any) => {
          setFileData(e.target.files[0]);
        }}/>
      <label htmlFor="file" className='float-right'>
        <span>Ajouter une photo</span>
      
      {isError && <div>ERROR: {isError.message}</div>}

          {isLoading && progress && (
            <div >En cours : {Math.round(progress.value*100)} % </div>

          )}
            </label>
    </div>
  );
};

export default AdminFileInput;
