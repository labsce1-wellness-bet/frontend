import React, { useState, useContext } from "react";
import { CompRunningWrapper } from "./CompRunningStyles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BeforeStart } from "./BeforeStart";
import { VictoryChart, VictoryArea, VictoryGroup } from "victory";
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
const CompRunning: React.FC<Props> = props => {
  const state = useContext(UserContext);
  const group = props.group;
  const classes = useStyles();
  const RANKINGS = "RANKINGS";
  const STATS = "STATS";
  const INFO = "INFO";
  const [tabNum, setTabNum] = useState(0);
  group.members.sort((a: any, b: any) =>
    a.progress > b.progress ? -1 : b.progress > a.progress ? 1 : 0,
  );
  const graphColorSelf = "green";
  const graphColors = ["cyan", "magenta", "yellow", "orange", "purple"];
  const self = group.members.find(
    (member: { fname: string }) => member.fname === state.fname,
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
        </div>
      )}
      {tabNum === 1 && (
        <div>
          <VictoryChart width={400} height={400}>
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
            <VictoryGroup
              style={{ data: { strokeWidth: 3, fillOpacity: 0.2 } }}>
              {group.members.slice(0, 4).map((member: any, index: number) => {
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
                          : {
                              fill: graphColors[index],
                              stroke: graphColors[index],
                            },
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
      {tabNum === 2 && <BeforeStart group={group}></BeforeStart>}
    </CompRunningWrapper>
  );
};

export { CompRunning };
