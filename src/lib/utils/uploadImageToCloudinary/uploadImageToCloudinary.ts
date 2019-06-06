import axios from "axios";
export default async (
  fileParams: any,
  base64ImageData: string,
  dispatch: Function,
) => {
  try {
    if (dispatch) {
      dispatch({ type: "LOADING" });
    }
    const { data } = await axios({
      method: "post",

      url:
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_BACKEND_PRODUCTION_URL + "image/signed-upload"
          : process.env.REACT_APP_BACKEND_LOCAL_URL + "image/signed-upload",
      data: {
        fileParams,
        base64ImageData,
      },
    });
    if (dispatch) {
      dispatch({ type: "UPLOAD_SUCCESSFUL" });
    }
    return data;
  } catch (err) {
    if (dispatch) {
      dispatch({ type: "UPLOAD_ERROR" });
    }
  }
};
