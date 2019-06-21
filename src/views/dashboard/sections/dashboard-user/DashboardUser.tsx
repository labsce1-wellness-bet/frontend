import React from "react";
import { DashboardUserWrapper } from "./DashboardUserStyles";
import { Typography } from "@material-ui/core";
import { BeforeStart } from "./BeforeStart";

interface Props {
  group: any;
}
const DashboardUser: React.FC<Props> = props => {
  return <BeforeStart group={props.group}></BeforeStart>;
};

export { DashboardUser };
