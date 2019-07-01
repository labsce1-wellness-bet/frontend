import React, { useContext, useState } from "react";
import { Route, Link } from "react-router-dom";

import { DashboardStart } from "./sections/dashboard-start/DashboardStart";
import { DashboardJoinGroup } from "./sections/dashboard-join-group/DashboardJoinGroup";
import { DashboardNewGroup } from "./sections/dashboard-new-group/DashboardNewGroup";
import { DashboardAdmin } from "./sections/dashboard-admin/DashboardAdmin";
import { DashboardNewComp } from "./sections/dashboard-new-comp/DashboardNewComp";
import { HandleGroupView } from "./sections/HandleGroupView";

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
import { Settings } from "@material-ui/icons";
import { UserContext } from "GlobalContext/UserContext";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    "@media (min-width:1024px)": {
      top: "0",
      bottom: "94%",
    },
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
interface UserInfo {
  name: string;
  nickname: string;
}

const Dashboard: React.SFC<Props> = () => {
  const state: {
    fname: string;
    lname: string;
    email: string;
    groups: any;
  } = useContext(UserContext);
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
      <Route exact path="/dashboard/admin" component={DashboardAdmin} />
      <Route
        exact
        path="/dashboard/group/:groupId"
        component={HandleGroupView}
      />
      <Route
        exact
        path="/dashboard/new-comp"
        component={DashboardNewComp}></Route>
      {/* Every page for dashboard has the below components */}
      <SwipeableDrawer
        anchor="left"
        open={isMenuDrawerOpen}
        onOpen={setIsMenuDrawerOpen.bind(null, true)}
        onClose={setIsMenuDrawerOpen.bind(null, false)}>
        <div className={classes.fullList}>
          <header>
            {/* TODO: Bring in data for name and email of user */}
            <h2>{`${state.fname} ${state.lname}`}</h2>
            <p>{`${state.email}`}</p>
          </header>
          <Divider />
          <List>
            {state.groups.length === 0 ? (
              <h5>No groups</h5>
            ) : (
              // @ts-ignore
              state.groups.map(group => {
                return (
                  <Link
                    to={`/dashboard/group/${group.groupId}`}
                    key={group.groupId}>{`${group.groupName}`}</Link>
                );
              })
            )}
            <Link to="/dashboard/settings">
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItem>
            </Link>
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
            <Link to="/dashboard/new-group">
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>Create New Group</ListItemText>
              </ListItem>
            </Link>
            <Link to="/dashboard/join-group">
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>Join With Code</ListItemText>
              </ListItem>
            </Link>
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
