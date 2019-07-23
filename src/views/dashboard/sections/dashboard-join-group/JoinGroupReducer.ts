import { useReducer } from "react";

interface Action {
  type: string;
  [key: string]: any;
}

interface State {}
const initialState = {
  groupSecretText: "",
};

const joinGroupReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return {
        ...state,
        [action.inputName]: action.value,
      };
    }
    default: {
      throw Error(
        `joinGroupReducer got an unknown action. Error: ${JSON.stringify(
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
  joinGroupReducer,
  initialState,
);
