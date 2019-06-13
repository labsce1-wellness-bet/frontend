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
import AddIcon from "@material-ui/icons/Add";
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
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isPlusDrawerOpen, setIsPlusDrawerOpen] = useState(false);
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
        open={isMenuDrawerOpen}
        onOpen={setIsMenuDrawerOpen.bind(null, true)}
        onClose={setIsMenuDrawerOpen.bind(null, false)}>
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
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={setIsMenuDrawerOpen.bind(null, true)}>
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            onClick={setIsPlusDrawerOpen.bind(null, true)}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="bottom"
        open={isPlusDrawerOpen}
        onOpen={setIsPlusDrawerOpen.bind(null, true)}
        onClose={setIsPlusDrawerOpen.bind(null, false)}>
        <div className={classes.fullList}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>Create New Group</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>Join With Code</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>Log Sleep</ListItemText>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </DashboardWrapper>
  );
};

export default Dashboard;
