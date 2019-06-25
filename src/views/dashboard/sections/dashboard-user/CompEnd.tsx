import React, { useState, useContext } from "react";
import { CompEndWrapper, Image } from "./CompEndStyles";
import WinnerSrc from "../../lib/assets/winner.png";
import base64Winner from "../../lib/base64Data/base64-winner";
import { Typography, AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import { UserContext } from "GlobalContext/UserContext";
import { Rankings } from "components/Rankings/Rankings";
import { LineGraph } from "components/Graphs/LineGraph";

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
  const [tabNum, setTabNum] = useState(0);
  const WINNER = "WINNER";
  const RESULTS = "RESULTS";

  const classes = useStyles();

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
            <Rankings data={group.members}></Rankings>
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
      </div>
    </CompEndWrapper>
  );
};

export { CompEnd };
