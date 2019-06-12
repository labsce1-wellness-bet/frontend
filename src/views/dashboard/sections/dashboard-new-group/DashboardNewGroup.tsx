import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
export interface Props {}

const DashboardNewGroup: React.SFC<Props> = () => {
  const [state, dispatch] = newGroupReducer();
  const { groupName, messageGroup, joinCode } = state;
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
