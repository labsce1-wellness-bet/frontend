import React, { useEffect } from "react";
import {
  UploadImageWidget,
  uploadWidgetReducer,
} from "components/UploadImageWidget/index";

import { UploadAvatarPhoto } from "components/UploadAvatarPhoto/index";
import uploadToCloudinaryReducer from "lib/utils/uploadImageToCloudinary/uploadToCloudinaryReducer";
import uploadImageToCloudinary from "lib/utils/uploadImageToCloudinary/uploadImageToCloudinary";
import axios from "axios";
import Auth from "Auth/Auth.js";
import AuthFitbit from "components/Fitbit/AuthFitbit";

interface Props {}

const Test: React.SFC<Props> = () => {
  const [uwState, uwDispatch] = uploadWidgetReducer();
  const [cloudState, cloudDispatch] = uploadToCloudinaryReducer();
  const { base64ImageData } = uwState;
  useEffect(() => {
    const auth = new Auth();
    console.log(auth.getUserInfo());
  }, []);

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
      <AuthFitbit userId={1} />
    </div>
  );
};

export default Test;
