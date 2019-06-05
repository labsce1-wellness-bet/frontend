import React from "react";
import { CloudinaryUpload } from "../interfaces";
import {
  UploadWrapper,
  UploadContent,
  CtaInstruction,
} from "./UploadImageWidgetStyles";
import axios from "axios";

interface Props {
  cloudinaryUploadData: CloudinaryUpload;
  instructionText: String;
}

const UploadWidgetImageProps: React.SFC<Props> = ({
  cloudinaryUploadData,
  instructionText,
}) => {
  const onSubmit = async () => {
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
      <UploadContent>
        <CtaInstruction>{instructionText}</CtaInstruction>
        <p>or</p>
        <input type="file" />
      </UploadContent>
    </UploadWrapper>
  );
};

export default UploadWidgetImageProps;
