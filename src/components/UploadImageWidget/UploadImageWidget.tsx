import React, { useState } from "react";
import { CloudinaryUpload } from "../interfaces";
import {
  UploadWrapper,
  UploadImageInput,
  OverlayLabel,
  Image,
  StartingContent,
  AfterUploadContent,
} from "./UploadImageWidgetStyles";
import axios from "axios";
interface Props {
  cloudinaryUploadData: CloudinaryUpload;
  startingInstructions: String;
  afterUploadInstructions: String;
}

const UploadWidgetImageProps: React.SFC<Props> = ({
  cloudinaryUploadData,
  startingInstructions,
  afterUploadInstructions,
}) => {
  const [base64Image, setBase64Image] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const fileSelectHandler = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    //@ts-nocheck
    const url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      setBase64Image(reader.result as string);
      setIsImageUploaded(true);
    };
  };
  const uploadImage = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url:
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_BACKEND_PRODUCTION_URL
            : process.env.REACT_APP_BACKEND_LOCAL_URL,
        data: {
          ...cloudinaryUploadData,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UploadWrapper>
      <OverlayLabel for="browse-files" />
      <UploadImageInput
        type="file"
        name="browse-files"
        id="browse-files"
        onChange={fileSelectHandler}
      />
      {base64Image ? <Image src={base64Image} alt="" /> : null}

      {isImageUploaded ? (
        <AfterUploadContent className="upload-image-widget__after-upload-content">
          <h3>{afterUploadInstructions}</h3>
          <p>or</p>
          <h3>Click me</h3>
        </AfterUploadContent>
      ) : (
        <StartingContent>
          <h3>{startingInstructions}</h3>
          <p>or</p>
          <h3>Click me</h3>
        </StartingContent>
      )}
    </UploadWrapper>
  );
};

export default UploadWidgetImageProps;
