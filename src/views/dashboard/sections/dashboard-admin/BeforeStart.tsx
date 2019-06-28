import React, { useState } from "react";
import { BeforeStartWrapper } from "./BeforeStartStyles";
import {
  AppBar,
  Tabs,
  Tab,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListSubheader,
} from "@material-ui/core";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

interface Props {
  group: any;
}
const BeforeStart: React.FC<Props> = props => {
  //@ts-ignore
  const classes = useStyles();
  const INFO = "INFO";
  const PENDING = "PENDING";
  const APPROVED = "APPROVED";
  const [tabNum, setTabNum] = useState(0);

  const group = props.group;

  return (
    <BeforeStartWrapper>
      <div className="desktop-view">
        <div className="info-content">
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
        <div className="track-payment">
          <Typography variant="h5" color="primary">
            Waiting for Approval
          </Typography>
          <List className="desktop-list">
            {group.members.map((member: any, index: number) => {
              if (member.paid === false) {
                return (
                  <div key={index}>
                    <ListItem className="receipts">
                      <ListItemText>
                        {member.fname} <br />
                        {member.lname}
                      </ListItemText>
                      <ListItemIcon aria-label="Receipt">
                        {member.receipt ? (
                          <ReceiptIcon color="primary" />
                        ) : (
                          <ReceiptOutlinedIcon color="disabled" />
                        )}
                      </ListItemIcon>
                    </ListItem>
                  </div>
                );
              }
              return false;
            })}
          </List>
          <Typography variant="h5" color="primary">
            Approved
          </Typography>
          <List className="desktop-list">
            {group.members.map((member: any, index: number) => {
              if (member.paid === true) {
                return (
                  <div key={index}>
                    <ListItem className="receipts">
                      <ListItemText>
                        {member.fname} <br />
                        {member.lname}
                      </ListItemText>
                      <ListItemIcon aria-label="Receipt">
                        {member.receipt ? (
                          <ReceiptIcon color="primary" />
                        ) : (
                          <ReceiptOutlinedIcon color="disabled" />
                        )}
                      </ListItemIcon>
                    </ListItem>
                  </div>
                );
              }
              return false;
            })}
          </List>
        </div>
      </div>
      <AppBar
        position="sticky"
        color="default"
        className={`${classes.appBar} appBar`}>
        <Tabs
          value={tabNum}
          onChange={(e: any, index: number) => setTabNum(index)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth">
          <Tab label={INFO} />
          <Tab label={PENDING} />
          <Tab label={APPROVED} />
        </Tabs>
      </AppBar>
      {tabNum === 0 && (
        <div className="tab">
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
        </div>
      )}
      {tabNum === 1 && (
        <div className="tab pending">
          <List>
            {group.members.map((member: any, index: number) => {
              if (member.paid === false) {
                return (
                  <div key={index}>
                    <ListItem className="receipts">
                      <ListItemText>{`${member.fname} ${member.lname}`}</ListItemText>
                      <ListItemIcon aria-label="Receipt">
                        {member.receipt ? (
                          <ReceiptIcon color="primary" />
                        ) : (
                          <ReceiptOutlinedIcon color="disabled" />
                        )}
                      </ListItemIcon>
                    </ListItem>
                    <Divider></Divider>
                  </div>
                );
              }
              return false;
            })}
          </List>
        </div>
      )}
      {tabNum === 2 && (
        <div className="tab pending">
          <List>
            {group.members.map((member: any, index: number) => {
              if (member.paid === true) {
                return (
                  <div key={index}>
                    <ListItem className="receipts">
                      <ListItemText>{`${member.fname} ${member.lname}`}</ListItemText>
                      <ListItemIcon aria-label="Receipt">
                        {member.receipt ? (
                          <ReceiptIcon color="primary" />
                        ) : (
                          <ReceiptOutlinedIcon color="disabled" />
                        )}
                      </ListItemIcon>
                    </ListItem>
                    <Divider></Divider>
                  </div>
                );
              }
              return false;
            })}
          </List>
        </div>
      )}
    </BeforeStartWrapper>
  );
};

export { BeforeStart };
