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
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className="title"
        gutterBottom={true}>
        {group.groupName}
      </Typography>
      <Typography
        variant="h6"
        color="textPrimary"
        align="left"
        className="text"
        gutterBottom={true}>
        {`Admin: ${group.adminName}`}
      </Typography>
      <Typography
        variant="h6"
        color="textPrimary"
        align="left"
        className="text"
        gutterBottom={true}>
        {`Buy in: $${group.betAmount}`}
      </Typography>
      <Typography
        variant="h6"
        color="textPrimary"
        align="left"
        className="text"
        gutterBottom={true}>
        {`Current Pot Total: $${group.potTotal}`}
      </Typography>
      <Typography
        variant="h6"
        color="textPrimary"
        align="left"
        className="text"
        gutterBottom={true}>
        {`Start: ${group.startDate}`}
      </Typography>
      <Typography
        variant="h6"
        color="textPrimary"
        align="left"
        className="text"
        gutterBottom={true}>
        {`End: ${group.endDate}`}
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        align="left"
        className="message"
        gutterBottom={true}>
        {`Message:`}
      </Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        align="left"
        className="message-text"
        gutterBottom={true}>
        {`${group.message}`}
      </Typography>
      <Button variant="contained" color="primary" className="button">
        ADD PAYMENT PROOF
      </Button>
      <Button variant="outlined" color="primary" className="button">
        LEAVE
      </Button>
    </DashboardUserWrapper>
  );
};

export { BeforeStart };
