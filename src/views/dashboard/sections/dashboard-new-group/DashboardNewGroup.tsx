import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export interface Props {}

const DashboardNewGroup: React.SFC<Props> = () => {
  const [state, dispatch] = newGroupReducer();
  const { groupName } = state;
  return (
    <DashboardNewGroupWrapper>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className="title"
        gutterBottom={true}>
        New Group
      </Typography>
      <Form className="form">
        <TextField
          className="input"
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
        <Button variant="contained" color="primary" className="button">
          Create New Group
        </Button>
      </Form>
    </DashboardNewGroupWrapper>
  );
};

export { DashboardNewGroup };
