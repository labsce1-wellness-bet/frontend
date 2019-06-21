import React from "react";
import { CompRunningWrapper } from "./CompRunningStyles";
import { Typography } from "@material-ui/core";

interface Props {
  group: any;
}
const CompRunning: React.FC<Props> = props => {
  const group = props.group;

  return <CompRunningWrapper></CompRunningWrapper>;
};

export { CompRunning };
