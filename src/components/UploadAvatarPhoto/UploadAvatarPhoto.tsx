import React, { useState } from "react";
import { PhotoCircle } from "./UploadAvatarPhotoStyles";
import { MaterialSimpleModal } from "components/MaterialSimpleModal/MaterialSimpleModal";
export interface Photo {
  state: any;
  dispatch: Function;
}

const UploadAvatarPhoto: React.SFC<Photo> = ({ state, dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileSelectHandler = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadstart = () => {
      dispatch({ type: "UPLOADING_IMAGE" });
    };
    reader.onloadend = () => {
      dispatch({ type: "UPLOADED_IMAGE", base64ImageData: reader.result });
      console.log(url);
    };
    reader.onerror = () => {
      dispatch({ type: "UPLOADING_IMAGE_ERROR" });
    };
  };
  return (
    <>
      <MaterialSimpleModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}>
        <div />
      </MaterialSimpleModal>
      <PhotoCircle
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
    </>
  );
};

export default UploadAvatarPhoto;
