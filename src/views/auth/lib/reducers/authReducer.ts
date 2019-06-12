import { useReducer } from "react";
import { AuthState } from "./auth-state.interface";
interface Action {
  type: string;
  inputName: string;
  value: string;
  [key: string]: any;
}

const initialState = {
  username: "",
  password: "",
  email: "",
  isLoading: false,
  hasError: false,
};

const authReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return {
        ...state,
        [action.inputName]: action.value,
      };
    }
    default: {
      throw Error(
        `authReducer got an unknown action. Error: ${JSON.stringify(
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
  authReducer,
  initialState,
);
