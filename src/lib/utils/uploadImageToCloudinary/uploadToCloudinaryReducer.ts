import { useReducer } from "react";

interface Action {
  type: string;
  [key: string]: any;
}
interface State {
  [key: string]: any;
}
const initialState = {
  isLoading: false,
  hasError: false,
  imageHasUploaded: false,
};
const uploadToCloudinaryReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        imageHasUploaded: false,
      };
    }
    case "UPLOAD_SUCCESSFUL": {
      return {
        ...state,
        hasError: false,
        isLoading: false,
        imageHasUploaded: true,
      };
    }
    case "UPLOAD_ERROR": {
      return {
        ...state,
        hasError: true,
        isLoading: false,
        imageHasUploaded: false,
      };
    }
    default: {
      throw Error(
        `uploadToCloudinaryReducer got an unknown action. Error: ${JSON.stringify(
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
  uploadToCloudinaryReducer,
  initialState,
);
