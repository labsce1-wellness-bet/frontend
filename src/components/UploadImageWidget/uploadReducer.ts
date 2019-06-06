import { useReducer } from "react";

interface Action {
  type: string;
  [key: string]: any;
}
interface State {}
const initialState = {};
const uploadReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "": {
      return {
        ...state,
      };
    }
    default: {
      throw Error(
        `uploadReducer got an unknown action. Error: ${JSON.stringify(
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
  uploadReducer,
  initialState,
);
