import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useGroupContextValue } from "GlobalContext/GroupContext";
import axios from "axios";
import getAllGroupsInfo from "../../Dashboard";

export interface Props {}

const DashboardNewGroup: React.SFC<Props> = () => {
  const [groupState, groupDispatch] = useGroupContextValue();
  const baseURL = process.env.REACT_APP_BACKEND_URL;
  const [state, dispatch] = newGroupReducer();
  const { groupName } = state;

  const postNewGroup = (newGroup: any) => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.access_token}`,
    };
    const promise = axios.post(`${baseURL}api/group`, newGroup, {
      headers: headers,
    });

    promise
      .then(response => {
        console.log("response", response.data);
        groupDispatch({ type: "addNewGroup", payload: response.data });
      })
      .catch(error => {
        groupDispatch({ type: "error", payload: error });
      });
  };
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
      <Form
        className="form"
        onSubmit={(event: { preventDefault: () => void }) => {
          event.preventDefault();
          postNewGroup({ groupName: state.groupName });
        }}>
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
        <Button
          variant="contained"
          color="primary"
          className="button"
          type="submit">
          Create New Group
        </Button>
      </Form>
    </DashboardNewGroupWrapper>
  );
};

export { DashboardNewGroup };
