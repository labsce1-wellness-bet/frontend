import { useReducer } from "react";

interface Action {
  type: string;
  inputName: string;
  value: string;
  [key: string]: any;
}
interface State {
  username: string;
  password: string;
  email: string;
  isLoading: boolean;
  hasError: boolean;
}
const initialState = {
  username: "",
  password: "",
  email: "",
  isLoading: false,
  hasError: false,
};

const authReducer = (state: State, action: Action) => {
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
