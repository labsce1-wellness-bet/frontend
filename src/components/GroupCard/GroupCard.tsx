import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    cursor: "pointer",
    maxWidth: "600px",
    "&:hover": {
      background: "lightgrey",
    },
  },
  content: {
    display: "flex",
    padding: "0 0 0 1em",
  },
}));

export interface Props {
  name: string;
}

const GroupCard: React.SFC<Props> = ({ name }) => {
  //@ts-ignore
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.content}>
        <p>{name}</p>
      </div>
      <Divider />
    </Paper>
  );
};

export { GroupCard };
