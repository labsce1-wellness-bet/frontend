import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useGroupContextValue } from "GlobalContext/GroupContext";
import getAllGroupsInfo from "../../Dashboard";
import axios from "axios";
import jss from "jss";

//onSubmit ={(e: { preventDefault: () => void }) =>{e.preventDefault(); addGroup(groupName)}}
export interface Props {}

const DashboardNewGroup: React.SFC<Props> = () => {
  const [groupState, groupDispatch] = useGroupContextValue();
  const baseURL = process.env.REACT_APP_BACKEND_URL;
  const [state, dispatch] = newGroupReducer();
  const { groupName } = state;
  const addGroup = async (groupName: any) => {
    console.log(state, "addgroup");

    try {
      await axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.access_token}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/group`,
        data: { groupName: state.groupName },
      }).then(data => {
        groupState.groups.push(data);
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
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
        onSubmit={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          addGroup(groupName);
          dispatch({ type: "SET_TEXT", inputName: "groupName", value: "" });
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
          type="submit"
          color="primary"
          className="button">
          Create New Group
        </Button>
      </Form>
    </DashboardNewGroupWrapper>
  );
};

export { DashboardNewGroup };
