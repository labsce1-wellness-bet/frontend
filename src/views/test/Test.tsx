import React from "react";
import {
  UploadImageWidget,
  uploadWidgetReducer,
} from "components/UploadImageWidget/index";

import UploadAvatarPhoto from "components/UploadAvatarPhoto/UploadAvatarPhoto";
import uploadToCloudinaryReducer from "lib/utils/uploadImageToCloudinary/uploadToCloudinaryReducer";
import uploadImageToCloudinary from "lib/utils/uploadImageToCloudinary/uploadImageToCloudinary";

import axios from "axios";
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
      <UploadAvatarPhoto state={""} dispatch={() => {}} />
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
      <button
        onClick={async () => {
          const data = await axios({
            method: "get",
            url: process.env.REACT_APP_BACKEND_PRODUCTION_URL + "api/user/1",
          });
          console.log(data);
        }}>
        Get user data
      </button>
    </div>
  );
};

export default Test;
