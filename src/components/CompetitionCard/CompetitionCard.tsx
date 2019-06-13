import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

export interface Props {
  startDate: String;
  endDate: String;
  metricType: String;
  betAmount: number;
}
const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    cursor: "pointer",
    maxWidth: "600px",
    "&:hover": {
      background: "lightgrey",
    },
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0 2em",
  },
}));
const CompetitionCard: React.SFC<Props> = ({
  startDate,
  endDate,
  metricType,
  betAmount,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <p>{`Start Date: ${startDate}`}</p>
        <p>{`End Date: ${endDate}`}</p>
        <p>{`Metric Type: ${metricType}`}</p>
        <p>{`Bet Amount: ${betAmount}`}</p>
      </div>
    </Paper>
  );
};

export { CompetitionCard };
