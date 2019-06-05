import React from "react";
import base64KittySleeping from "../auth/lib/base64Data/base64-kitty-sleeping";
import UploadImageWidget from "components/UploadImageWidget/UploadImageWidget";
interface Props {}

//@ts-ignore

const Test: React.SFC<Props> = () => {
  return (
    <div>
      <UploadImageWidget
        instructionText={"Drag and drop photo evidence of payment here"}
        cloudinaryUploadData={{
          base64ImageData: base64KittySleeping,
          fileOptions: {
            uploadPreset: "",
            publicId: "",
          },
        }}
      />
    </div>
  );
};

export default Test;
