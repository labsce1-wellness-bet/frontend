import React, { useEffect, useState } from "react";
import {
    UploadImageWidget,
    uploadWidgetReducer,
} from "components/UploadImageWidget/index";

import { UploadAvatarPhoto } from "components/UploadAvatarPhoto/index";
import uploadToCloudinaryReducer from "lib/utils/uploadImageToCloudinary/uploadToCloudinaryReducer";
import uploadImageToCloudinary from "lib/utils/uploadImageToCloudinary/uploadImageToCloudinary";
import axios, { AxiosResponse } from "axios";
import Auth from "Auth/Auth.js";

interface Props {}
interface UserInfo {
    name: string;
    nickname: string;
}
const Test: React.SFC<Props> = () => {
    const [uwState, uwDispatch] = uploadWidgetReducer();
    const [cloudState, cloudDispatch] = uploadToCloudinaryReducer();
    const { base64ImageData } = uwState;
    const [state, setState] = useState({} as UserInfo);
    useEffect(() => {
	const auth = new Auth();
	/* console.log("GETUSERINFO", auth.getUserInfo());*/
	auth.getUserInfo(setState);
    }, []);

    return (
	<div>
            <div>
		<h1>{state.name}</h1>
	    </div>
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
			try {
			    const { data }: AxiosResponse<any> = await axios({
				headers: {
				    Authorization: `Bearer ${window.localStorage.getItem(
                  "access_token",
                )}`,
				},
				method: "get",
				url:
                    process.env.REACT_APP_BACKEND_LOCAL_URL +
                    "api/group/id/1/public/all/user-info",
			    });
			    console.log(data);
			} catch (err) {
			    console.log(err);
			}
		}}>
		Get user data
	    </button>
	</div>
    );
};

export default Test;
