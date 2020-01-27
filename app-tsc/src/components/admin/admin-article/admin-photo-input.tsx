import React, { useState } from "react";
import "./../admin.scss";
import { Photos } from "../../../domain/photos-types";
import useFirebaseUpload from "./use-file-upload-hook";

interface PropsType {
  photos: Photos;
}

const AdminPhotoInput = (props: PropsType) => {
  const [
    { data, isLoading, isError, progress },
    setFileData
  ] = useFirebaseUpload();

  const [previews, setPreviews]= useState<Array<any>>([]);

  const [photos, setPhotos] = useState<Photos>(props.photos || []);

  const onChangePhotoInput = (newPhoto: any) => {
    debugger;

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function() {
        setPreviews([...previews, reader.result]);
      },
      false
    );

    reader.readAsDataURL(newPhoto);

    setFileData(newPhoto);
    setPhotos(state => [...photos, newPhoto]);
  };

  return (
    <div className="admin-photo-input">
      <input
        type="file"
        onChange={(e: any) => {
          onChangePhotoInput(e.target.files[0]);
        }}
      />
      {previews.map((preview, i) => {
        return <img className="photo-preview" key={`preview_${i}`} src={preview} />;
      })}
    </div>
  );
};

export default AdminPhotoInput;
