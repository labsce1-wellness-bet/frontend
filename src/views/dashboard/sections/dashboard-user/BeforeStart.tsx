import React from "react";
import { DashboardUserWrapper } from "./DashboardUserStyles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface Props {
  group: any;
}
const BeforeStart: React.FC<Props> = props => {
  console.log(props.group);
  const group = props.group;
  return (
    <DashboardUserWrapper>
      <div className="info-container">
        <Typography
          variant="h4"
          color="primary"
          align="center"
          className="title">
          {group.groupName}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Admin: ${group.adminName}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Buy in: $${group.betAmount}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Current Pot Total: $${group.potTotal}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Start: ${group.startDate}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`End: ${group.endDate}`}
        </Typography>
      </div>
      <div className="message-container">
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className="message">
          {`Message:`}
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          align="left"
          className="message-text">
          {`${group.message}`}
        </Typography>
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" className="button">
          ADD PAYMENT PROOF
        </Button>
        <Button variant="outlined" color="primary" className="button">
          LEAVE
        </Button>
      </div>
    </DashboardUserWrapper>
  );
};

export { BeforeStart };
