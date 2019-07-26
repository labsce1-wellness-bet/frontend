import React, { useState, useRef } from "react";
import { DashboardJoinGroupWrapper, Form } from "./DashboardJoinGroupStyles";
import { useGroupContextValue } from "GlobalContext/GroupContext";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import joinGroupReducer from "./JoinGroupReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  hideProgressBar: true,
});

interface Props {}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
  },

  joinBtn: {
    width: "50%",
    margin: `${theme.spacing(1)} auto 0 auto`,
  },
}));

const DashboardJoinGroup: React.SFC<Props> = () => {
  const [labelWidth] = useState(0);
  const labelRef = useRef(null);
  //@ts-ignore
  const classes = useStyles();
  const [groupState] = useGroupContextValue();
  const [state, dispatch] = joinGroupReducer();
  const [groupSecretText, setGroupSecretText] = useState();

  const textChange = (event: any) => {
    setGroupSecretText(event.target.value);
  };

  const joinGroup = async (groupSecretText: any) => {
    console.log("state", state);
    console.log("groupSecretText", groupSecretText);
    state.groupSecretText = groupSecretText;
    // const { groupSecretText } = state;
    try {
      // console.log("groupCode", state.groupCode);
      await axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.access_token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        method: "put",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/group/join-group/${groupSecretText}`,
        data: { groupSecretText: state.groupSecretText },
      }).then(data => {
        groupState.groups.push(data);
        console.log("data", data);
        const groupId = data.data.groupId;
        const location = `${process.env.DOMAIN_NAME_DASHBOARD}/dashboard/group/${groupId}`;
        console.log("groupId", groupId);
        console.log("location", location);
        toast("Joined Group");
        //@ts-ignore
        window.location = `${process.env.REACT_APP_DOMAIN_NAME_DASHBOARD}/group/${groupId}`; //REDIRECT TO GROUP PAGE
      });
    } catch (err) {
      console.log("err", err);
      toast("Group Was Not Joined");
    }
  };

  return (
    <DashboardJoinGroupWrapper>
      <Form
        className="form"
        onSubmit={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          joinGroup(groupSecretText);
          dispatch({
            type: "SET_TEXT",
            inputName: "groupSecretText",
            value: "",
          });
        }}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Secret Code
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={groupSecretText}
            onChange={textChange}
            labelWidth={labelWidth}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.joinBtn}>
          Join Group
        </Button>
      </Form>
    </DashboardJoinGroupWrapper>
  );
};

export { DashboardJoinGroup };
//fFE4gtF
//oWNPY4a
