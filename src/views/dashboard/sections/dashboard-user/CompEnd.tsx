import React, { useState, useContext } from "react";
import { CompEndWrapper, Image } from "./CompEndStyles";
import WinnerSrc from "../../lib/assets/winner.png";
import base64Winner from "../../lib/base64Data/base64-winner";
import {
  Typography,
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { VictoryChart, VictoryLabel, VictoryGroup, VictoryArea } from "victory";
import moment from "moment";
import { UserContext } from "GlobalContext/UserContext";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

interface Props {
  group: any;
}
const CompEnd: React.FC<Props> = props => {
  const state = useContext(UserContext);
  const group = props.group;
  group.members.sort((a: any, b: any) =>
    a.progress > b.progress ? -1 : b.progress > a.progress ? 1 : 0,
  );
  const [tabNum, setTabNum] = useState(0);
  const WINNER = "WINNER";
  const RESULTS = "RESULTS";

  const classes = useStyles();

  const graphColorSelf = "green";
  const graphColors = [
    "cyan",
    "magenta",
    "yellow",
    "orange",
    "purple",
    "aquamarine",
    "chocolate",
    "crimson",
    "darkblue",
    "black",
  ];
  const self = group.members.find(
    (member: { fname: string }) => member.fname === state.fname,
  );

  return (
    <CompEndWrapper>
      <div className="desktop">
        <Typography variant="h5" color="primary">
          {`Congratulations`}
        </Typography>
        <Typography
          variant="h5"
          color="primary">{`${group.members[0].fname} ${group.members[0].lname}!`}</Typography>
        <Typography
          variant="subtitle1"
          color="primary">{`Contact ${group.adminName} to collect your $${group.potTotal}`}</Typography>
        <Image alt={"winner"} base64={base64Winner} src={WinnerSrc} />
      </div>
      <div className="mobile-tabs">
        <AppBar
          position="sticky"
          color="default"
          className={`appBar ${classes.appBar}`}>
          <Tabs
            value={tabNum}
            onChange={(e: any, index: number) => setTabNum(index)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
            <Tab label={WINNER} />
            <Tab label={RESULTS} />
          </Tabs>
        </AppBar>
        {tabNum === 0 && (
          <div className="tab">
            <Typography variant="h5" color="primary">
              {`Congratulations`}
            </Typography>
            <Typography
              variant="h5"
              color="primary">{`${group.members[0].fname} ${group.members[0].lname}!`}</Typography>
            <Typography
              variant="subtitle1"
              color="primary">{`Contact ${group.adminName} to collect your $${group.potTotal}`}</Typography>
            <Image alt={"winner"} base64={base64Winner} src={WinnerSrc} />
          </div>
        )}
        {tabNum === 1 && (
          <div className="tab">
            <List>
              {group.members.map((member: any, index: number) => {
                return (
                  <div key={index}>
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
            <VictoryChart width={400} height={400}>
              <VictoryLabel
                style={{ fontSize: 20 }}
                x={200}
                y={20}
                text="My Progress"
                textAnchor="middle"
              />
              <VictoryGroup
                style={{ data: { strokeWidth: 3, fillOpacity: 0.2 } }}>
                <VictoryArea
                  style={{
                    data: {
                      fill: graphColorSelf,
                      stroke: graphColorSelf,
                    },
                  }}
                  data={[
                    {
                      x: moment()
                        .subtract(5, "days")
                        .format("M/DD/YYYY"),
                      y: self.last_five[0],
                    },
                    {
                      x: moment()
                        .subtract(4, "days")
                        .format("M/DD/YYYY"),
                      y: self.last_five[1],
                    },
                    {
                      x: moment()
                        .subtract(3, "days")
                        .format("M/DD/YYYY"),
                      y: self.last_five[2],
                    },
                    {
                      x: moment()
                        .subtract(2, "days")
                        .format("M/DD/YYYY"),
                      y: self.last_five[3],
                    },
                    {
                      x: moment()
                        .subtract(1, "days")
                        .format("M/DD/YYYY"),
                      y: self.last_five[4],
                    },
                  ]}
                />
              </VictoryGroup>
            </VictoryChart>
            <VictoryChart width={400} height={400}>
              <VictoryLabel
                style={{ fontSize: 20 }}
                x={200}
                y={20}
                text="Everyone"
                textAnchor="middle"
              />
              <VictoryGroup
                style={{ data: { strokeWidth: 3, fillOpacity: 0.2 } }}
                colorScale={graphColors}>
                {group.members.map((member: any, index: number) => {
                  return (
                    <VictoryArea
                      key={index}
                      style={{
                        data:
                          member.fname === state.fname
                            ? {
                                fill: graphColorSelf,
                                stroke: graphColorSelf,
                              }
                            : {},
                      }}
                      data={[
                        {
                          x: moment()
                            .subtract(5, "days")
                            .format("M/DD/YYYY"),
                          y: member.last_five[0],
                        },
                        {
                          x: moment()
                            .subtract(4, "days")
                            .format("M/DD/YYYY"),
                          y: member.last_five[1],
                        },
                        {
                          x: moment()
                            .subtract(3, "days")
                            .format("M/DD/YYYY"),
                          y: member.last_five[2],
                        },
                        {
                          x: moment()
                            .subtract(2, "days")
                            .format("M/DD/YYYY"),
                          y: member.last_five[3],
                        },
                        {
                          x: moment()
                            .subtract(1, "days")
                            .format("M/DD/YYYY"),
                          y: member.last_five[4],
                        },
                      ]}
                    />
                  );
                })}
              </VictoryGroup>
            </VictoryChart>
          </div>
        )}
      </div>
    </CompEndWrapper>
  );
};

export { CompEnd };
