import { PhotoCircle } from "./UploadAvatarPhotoStyles";
export interface Photo {
  state: any;
  dispatch: Function;
}

const UploadAvatarPhoto: React.SFC<Photo> = ({ state, dispatch }) => {
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
  return <PhotoCircle>Add Photo</PhotoCircle>;
};

export default UploadAvatarPhoto;
