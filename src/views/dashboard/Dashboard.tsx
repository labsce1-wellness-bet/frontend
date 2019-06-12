import React, { useState } from "react";
import { Route } from "react-router-dom";

import { DashboardStart } from "./sections/dashboard-start/DashboardStart";
import { DashboardJoinGroup } from "./sections/dashboard-join-group/DashboardJoinGroup";
import { DashboardNewGroup } from "./sections/dashboard-new-group/DashboardNewGroup";

import { DashboardWrapper } from "./DashboardStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Settings, Group } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
}));
interface Props {}
const Dashboard: React.SFC<Props> = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <DashboardWrapper>
      <Route exact path="/dashboard/start" component={DashboardStart} />
      <Route
        exact
        path="/dashboard/join-group"
        component={DashboardJoinGroup}
      />
      <Route exact path="/dashboard/new-group" component={DashboardNewGroup} />
      {/* Every page for dashboard has the below components */}
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onOpen={setIsDrawerOpen.bind(null, true)}
        onClose={setIsDrawerOpen.bind(null, false)}>
        <div className={classes.fullList}>
          <header>
            {/* TODO: Bring in data for name and email of user */}
            <h2>Jake Johnson</h2>
            <p>jake.johnson@email.com</p>
          </header>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText>Groups</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={setIsDrawerOpen.bind(null, true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </DashboardWrapper>
  );
};

export default Dashboard;
