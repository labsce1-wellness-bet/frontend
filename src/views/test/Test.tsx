import React from "react";
import UploadImageWidget from "components/UploadImageWidget/UploadImageWidget";
import uploadWidgetReducer from "components/UploadImageWidget/uploadWidgetReducer";

import uploadToCloudinaryReducer from "lib/utils/uploadImageToCloudinary/uploadToCloudinaryReducer";
import uploadImageToCloudinary from "lib/utils/uploadImageToCloudinary/uploadImageToCloudinary";

interface Props {}

const Test: React.SFC<Props> = () => {
  const [uwState, uwDispatch] = uploadWidgetReducer();
  const [cloudState, cloudDispatch] = uploadToCloudinaryReducer();
  const { base64ImageData } = uwState;

  return (
    <div>
      <UploadImageWidget
        startingInstructions={"Drag and drop photo evidence of payment here."}
        afterUploadInstructions={
          "Drag and drop new photo to change current one."
        }
        state={uwState}
        dispatch={uwDispatch}
      />
      <button
        onClick={async () => {
          const data = await uploadImageToCloudinary(
            {
              upload_preset: "users-receipts",
              public_id: "receipt-from-user1234",
            },
            base64ImageData,
            cloudDispatch,
          );
          console.log({ data });
          console.log({ cloudState });
        }}>
        Upload Image
      </button>
    </div>
  );
};

export default Test;
