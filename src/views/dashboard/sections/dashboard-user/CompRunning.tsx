import React, { useState, useContext } from "react";
import { CompRunningWrapper } from "./CompRunningStyles";
import { BeforeStart } from "./BeforeStart";
import { UserContext } from "GlobalContext/UserContext";
import {
  CardHeader,
  CardContent,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Card,
  makeStyles,
} from "@material-ui/core";
import { LineGraph } from "components/Graphs/LineGraph";
import { PieGraph } from "components/Graphs/PieGraph";
import { Rankings } from "components/Rankings/Rankings";
import { TestUserContext } from "GlobalContext/TestUserContext";

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
  // const state = useContext(UserContext);
  const testState = useContext(TestUserContext);
  const group = props.group;
  const classes = useStyles();
  const RANKINGS = "RANKINGS";
  const STATS = "STATS";
  const INFO = "INFO";
  const [tabNum, setTabNum] = useState(0);

  const self = group.members.find(
    (member: { fname: string }) => member.fname === testState.fname,
  );

  return (
    <CompRunningWrapper>
      <div className="desktop-view">
        <div className="header">
          <div className="header-left">
            <Typography variant="h4" color="primary">
              {group.groupName}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {`Competition Ends ${group.endDate}`}
            </Typography>
          </div>
          <Typography variant="h4" color="primary">
            {`Total Pot: $${group.potTotal}`}
          </Typography>
        </div>
        <div className="three-cards">
          <Card
            className="card rankings"
            style={{ maxHeight: 350, overflow: "auto" }}>
            <CardHeader title="Rankings"></CardHeader>
            <CardContent>
              <Rankings data={group.members}></Rankings>
            </CardContent>
          </Card>
          <Card className="card time">
            <CardHeader title="Time Left"></CardHeader>

            <CardContent>
              <PieGraph width={400} height={400} group={group}></PieGraph>
            </CardContent>
          </Card>

          <Card className="card my-stats">
            <CardHeader title="My Stats"></CardHeader>
            <CardContent style={{ paddingLeft: "50px" }}>
              <Typography variant="h6" color="primary">
                Today
              </Typography>
              <Typography variant="h3" color="primary">{`${self.last_five[4] -
                self.last_five[3]} hrs`}</Typography>
              <Typography variant="h6" color="primary">
                Total
              </Typography>
              <Typography
                variant="h3"
                color="primary">{`${self.last_five[4]} hrs`}</Typography>
            </CardContent>
          </Card>
        </div>
        <Card className="card comp-stats">
          <CardHeader title="Competition Statistics"></CardHeader>
          <CardContent>
            <LineGraph
              width={1000}
              height={280}
              data={group.members}></LineGraph>
          </CardContent>
        </Card>
      </div>
      <div className="mobile-tabs">
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
            <Rankings data={group.members}></Rankings>
          </div>
        )}
        {tabNum === 1 && (
          <div className="mobile-graphs">
            <LineGraph
              width={400}
              height={400}
              data={[self]}
              label="My Progress"></LineGraph>
            <LineGraph
              width={400}
              height={400}
              data={group.members}
              label="Everyone"></LineGraph>
          </div>
        )}
        {tabNum === 2 && <BeforeStart group={group}></BeforeStart>}
      </div>
    </CompRunningWrapper>
  );
};

export { CompRunning };
