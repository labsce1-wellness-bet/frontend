import React, { useState } from "react";
import { DashboardAdminWrapper } from "./DashboardAdminStyles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

interface Props {}
const DashboardAdmin: React.SFC<Props> = () => {
  //@ts-ignore
  const classes = useStyles();
  const INFO = "INFO";
  const PENDING = "PENDING";
  const APPROVED = "APPROVED";
  const [tabNum, setTabNum] = useState(0);

  return (
    <DashboardAdminWrapper>
      <AppBar position="sticky" color="default" className={classes.appBar}>
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
    </DashboardAdminWrapper>
  );
};

export { DashboardAdmin };
