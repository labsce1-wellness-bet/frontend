import React, { useContext } from "react";
import { DashboardStartWrapper, Content } from "./DashboardStartStyles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GlobalContext } from "GlobalContext/GlobalContext";

interface Props {}

const DashboardStart: React.SFC<Props> = () => {
  const state: { isAuthenticated: boolean } = useContext(GlobalContext);
  console.log("start", state);
  return (
    <DashboardStartWrapper>
      <Content>
        <Link to="/dashboard/new-group">
          <Button
            variant="outlined"
            color="primary"
            className="dashboard-start__btn">
            Create New Group
          </Button>
        </Link>
        <Link to="/dashboard/join-group">
          <Button
            variant="outlined"
            color="primary"
            className="dashboard-start__btn">
            Join With Code
          </Button>
        </Link>
      </Content>
    </DashboardStartWrapper>
  );
};

export { DashboardStart };
