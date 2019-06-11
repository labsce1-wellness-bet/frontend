import { useReducer } from "react";

interface Action {
  type: string;
  [key: string]: any;
  base64ImageData: string;
}
interface State {}
const initialState = {
  isLoading: false,
  hasError: false,
  errorType: "",
  isImageUploaded: false,
  base64ImageData: "",
  takePictureModeOn: false,
};
const uploadAvatarReducer = (state: State, action: Action) => {
  const CAMERA_ACCESS_ERROR = "CAMERA_ACCESS_ERROR";
  const UPLOADING_IMAGE_ERROR = "UPLOADING_IMAGE_ERROR";
  switch (action.type) {
    case "RESET_MODAL_STATE": {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorType: "",
        isImageUploaded: false,
        takePictureModeOn: false,
        picModeStep: 0,
      };
    }
    case "UPLOADING_IMAGE": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "UPLOADED_IMAGE": {
      return {
        ...state,
        isLoading: false,
        isImageUploaded: true,
        base64ImageData: action.base64ImageData,
      };
    }
    case "UPLOADING_IMAGE_ERROR": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorType: UPLOADING_IMAGE_ERROR,
      };
    }
    case "CAMERA_ACCESS_ERROR": {
      return {
        ...state,
        hasError: true,
        errorType: CAMERA_ACCESS_ERROR,
      };
    }
    case "TAKE_PICTURE_MODE_ON": {
      return {
        ...state,
        takePictureModeOn: true,
      };
    }
    default: {
      throw Error(
        `uploadAvatarReducer got an unknown action. Error: ${JSON.stringify(
          action,
          undefined,
        )}`,
      );
    }
  }
};

export default useReducer.bind(
  //@ts-ignore
  this,
  uploadAvatarReducer,
  initialState,
);
