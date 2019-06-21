import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
export interface Props {}

// @ts-ignore
const limitDecimal = value => {
  let result = parseFloat(value).toFixed(2);
  return value.length > result.length ? result : value;
};

const DashboardNewGroup: React.SFC<Props> = () => {
  const [state, dispatch] = newGroupReducer();
  const { groupName, messageGroup, joinCode, betAmount } = state;
  return (
    <DashboardNewGroupWrapper>
      <Form>
        <TextField
          id="filled-group-name"
          label="Group Name"
          name="groupName"
          value={groupName}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({ type: "SET_TEXT", inputName: name, value: value });
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          id="filled-bet-amount"
          label="Bet Amount $"
          name="betAmount"
          value={betAmount}
          type="number"
          placeholder="0.00"
          inputProps={{ step: "0.01", min: "0.00", pattern: "^d*(.d{0,2})?$" }}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({
              type: "SET_CURRENCY",
              inputName: name,
              value: limitDecimal(value),
            });
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          id="filled-join-code"
          label="Join Code"
          name="joinCode"
          value={joinCode}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({ type: "SET_TEXT", inputName: name, value: value });
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          id="filled-message-group"
          label="Message to Group"
          name="messageGroup"
          value={messageGroup}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({ type: "SET_TEXT", inputName: name, value: value });
          }}
          margin="normal"
          variant="filled"
          multiline={true}
          rows={3}
        />
        <Button variant="contained" color="primary">
          Create New Group
        </Button>
      </Form>
    </DashboardNewGroupWrapper>
  );
};

export { DashboardNewGroup };
