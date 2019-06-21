import React from "react";
import { DashboardNewGroupWrapper, Form } from "./DashboardNewGroupStyles";
import newGroupReducer from "./newGroupReducer";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export interface Props {}

const limitDecimal = (value: string, numDecimals: number | undefined) => {
  let result = parseFloat(value).toFixed(numDecimals);
  return value.length > result.length ? result : value;
};

const DashboardNewGroup: React.SFC<Props> = () => {
  const [state, dispatch] = newGroupReducer();
  const {
    groupName,
    messageGroup,
    joinCode,
    betAmount,
    startDate,
    endDate,
    goal,
  } = state;
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
      <Form>
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
        <TextField
          className="input"
          id="filled-bet-amount"
          label="Buy in Amount $"
          name="betAmount"
          value={betAmount}
          type="number"
          placeholder="0.00"
          inputProps={{
            step: "0.01",
            min: "0.00",
          }}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({
              type: "SET_TEXT",
              inputName: name,
              value: limitDecimal(value, 2),
            });
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          className="input"
          id="filled-start-date"
          label="Start Date"
          name="startDate"
          value={startDate}
          type="date"
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({
              type: "SET_TEXT",
              inputName: name,
              value: value,
            });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          className="input"
          id="filled-end-date"
          label="End Date"
          name="endDate"
          value={endDate}
          type="date"
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({
              type: "SET_TEXT",
              inputName: name,
              value: value,
            });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          className="input"
          id="filled-goal-amount"
          label="Hours per Day "
          name="goal"
          value={goal}
          type="number"
          placeholder={`${8}`}
          inputProps={{
            step: "0.5",
            min: "5",
            max: "10",
          }}
          onChange={(e: any) => {
            const { name, value } = e.target;
            dispatch({
              type: "SET_TEXT",
              inputName: name,
              value: limitDecimal(value, 1),
            });
          }}
          margin="normal"
          variant="filled"
          required={true}
        />
        <TextField
          className="input"
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
          className="message-input"
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
        <Button variant="contained" color="primary" className="button">
          Create New Group
        </Button>
      </Form>
    </DashboardNewGroupWrapper>
  );
};

export { DashboardNewGroup };
