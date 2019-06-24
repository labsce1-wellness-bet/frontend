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

var request = require("request");

var options = { method: 'POST',
		url: 'https://akshay-gadkari.auth0.com/oauth/token',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		form: 
   { grant_type: 'authorization_code',
     client_id: 'fX2Ov3PrG67snp7CsUrUFcFE8RN5aglD',
     client_secret: process.env.YOUR_CLIENT_SECRET,
     code: 'YOUR_AUTHORIZATION_CODE',
     redirect_ui: process.env.CALLBACK_PAGE
   }
};


request(options, function (error: object, response: object, body: object) {
    //if (error) throw new Error(error);
    console.log("body", body);
});

/* var options = { method: 'GET',
 * 		url: 'https://akshay-gadkari.auth0.com/api/v2/users',
 * 		qs: { q: 'name:"caleb kirkwood"', search_engine: 'v2' },
 * 		headers: { authorization: 'Bearer YOUR_MGMT_API_ACCESS_TOKEN' } };*/

/* request(options, function (error: object, response: object, body: object) {
 *     console.log("body", body);
 * });*/

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
