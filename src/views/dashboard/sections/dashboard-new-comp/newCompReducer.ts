import { useReducer } from "react";
import moment from "moment";
interface Action {
  type: string;
  [key: string]: any;
}
interface State {}
const initialState = {
  messageGroup: "",
  betAmount: "",
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().format("YYYY-MM-DD"),
  goal: "",
};
const newCompReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return {
        ...state,
        [action.inputName]: action.value,
      };
    }
    case "SET_CURRENCY": {
      return {
        ...state,
        [action.inputName]: action.value,
      };
    }
    default: {
      throw Error(
        `newCompReducer got an unknown action. Error: ${JSON.stringify(
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
  newCompReducer,
  initialState,
);
