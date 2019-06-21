import React, { useState } from "react";
import { CompRunningWrapper } from "./CompRunningStyles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from "@material-ui/core";
import { BeforeStart } from "./BeforeStart";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

interface Props {
  group: any;
}
const CompRunning: React.FC<Props> = props => {
  const group = props.group;
  const classes = useStyles();
  const RANKINGS = "RANKINGS";
  const STATS = "STATS";
  const INFO = "INFO";
  const [tabNum, setTabNum] = useState(0);
  group.members.sort((a: any, b: any) =>
    a.progress > b.progress ? -1 : b.progress > a.progress ? 1 : 0,
  );
  return (
    <CompRunningWrapper>
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
          <Tab label={RANKINGS} />
          <Tab label={STATS} />
          <Tab label={INFO} />
        </Tabs>
      </AppBar>
      {tabNum === 0 && (
        <div>
          <List>
            {group.members.map((member: any, index: number) => {
              return (
                <div>
                  <ListItem className="ranking">
                    <ListItemText>{`${index + 1}. ${member.fname} ${
                      member.lname
                    }`}</ListItemText>
                    <ListItemText className="ranking-hrs">{`${member.progress} Hrs`}</ListItemText>
                  </ListItem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      )}
      {tabNum === 1 && <div>Coming Soon!</div>}
      {tabNum === 2 && <BeforeStart group={group}></BeforeStart>}
    </CompRunningWrapper>
  );
};

export { CompRunning };
