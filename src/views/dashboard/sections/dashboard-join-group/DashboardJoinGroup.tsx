import React, { useEffect, useState, useRef } from "react";
import { DashboardJoinGroupWrapper, Form } from "./DashboardJoinGroupStyles";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
  const [groupSecretText, setGroupSecretText] = useState("");
  const labelRef = useRef(null);
  //@ts-ignore
  const classes = useStyles();

  const textChange = (event: any) => {
    setGroupSecretText(event.target.value);
  };

  // const joinGroup = async (groupCode: any) => {
  // 	console.log("JOINGROUP", state)
  // 	try {
  // 	    console.log("groupCode", state.groupCode);
  // 	    await axios({
  // 		headers: {
  // 		    "Content-Type": "application/json",
  // 		    Authorization: `Bearer ${window.localStorage.access_token}`,
  // 		},
  // 		method: "get",

  // 	    })
  // 	}
  // }

  useEffect(() => {
    setLabelWidth((labelRef.current as any).offsetWidth);
  }, []);
  return (
    <DashboardJoinGroupWrapper>
      <Form>
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
        <Button variant="contained" color="primary" className={classes.joinBtn}>
          Join Group
        </Button>
      </Form>
    </DashboardJoinGroupWrapper>
  );
};

export { DashboardJoinGroup };
