import React from "react";
import {
  UploadWrapper,
  UploadImageInput,
  OverlayLabel,
  Image,
  StartingContent,
  AfterUploadContent,
} from "./UploadImageWidgetStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
interface Props {
  startingInstructions: String;
  afterUploadInstructions: String;
  dispatch: Function;
  state: {
    isImageUploaded: boolean;
    isLoading: boolean;
    hasError: boolean;
    base64ImageData: string;
  };
}

const UploadWidgetImageProps: React.SFC<Props> = ({
  startingInstructions,
  afterUploadInstructions,
  dispatch,
  state,
}) => {
  const { isImageUploaded, isLoading, hasError, base64ImageData } = state;
  const fileSelectHandler = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    //@ts-nocheck
    const url = reader.readAsDataURL(file);
    reader.onloadstart = () => {
      dispatch({ type: "UPLOADING_IMAGE" });
    };
    reader.onloadend = () => {
      dispatch({ type: "UPLOADED_IMAGE", base64ImageData: reader.result });
    };
    reader.onerror = () => {
      dispatch({ type: "UPLOADING_IMAGE_ERROR" });
    };
  };

  return (
    <UploadWrapper isImageUploaded={isImageUploaded} hasError={hasError}>
      <OverlayLabel htmlFor="browse-files" />
      <UploadImageInput
        type="file"
        name="browse-files"
        id="browse-files"
        onChange={fileSelectHandler}
      />
      {base64ImageData ? <Image src={base64ImageData} alt="" /> : null}

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
      {isLoading && <CircularProgress />}
    </UploadWrapper>
  );
};

export default UploadWidgetImageProps;
