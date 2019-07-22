import React, { useEffect, useState, useRef } from "react";
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
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  //@ts-ignore
  const classes = useStyles();

  const [groupState, groupDispatch] = useGroupContextValue();
  const [state, dispatch] = joinGroupReducer();
  const [groupSecretText, setGroupSecretText] = useState();

  const textChange = (event: any) => {
    setGroupSecretText(event.target.value);
  };

  const joinGroup = async (groupSecretText: any) => {
    console.log("state", state);
    console.log("code", groupSecretText);
    state.groupSecretText = groupSecretText;
    // const { groupSecretText } = state;
    try {
      // console.log("groupCode", state.groupCode);
      await axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.access_token}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/group`,
        data: { groupSecretText: state.groupSecretText },
      }).then(data => {
        groupState.groups.push(data);
        console.log("data", data);
      });
    } catch (err) {
      console.log("err", err);
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
