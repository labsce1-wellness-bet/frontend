import { useReducer } from "react";

interface Action {
  type: string;
  [key: string]: any;
  base64ImageData: string;
}
interface State {
  isLoading: boolean;
  hasError: boolean;
  isImageUploaded: boolean;
  base64ImageData: string;
}
const initialState = {
  isLoading: false,
  hasError: false,
  isImageUploaded: false,
  base64ImageData: "",
};
const uploadWidgetReducer = (state: State, action: Action) => {
  switch (action.type) {
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
      };
    }
    default: {
      throw Error(
        `uploadWidgetReducer got an unknown action. Error: ${JSON.stringify(
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
  uploadWidgetReducer,
  initialState,
);
