import React from "react";
import { CompEndWrapper } from "./CompEndStyles";
import { Typography } from "@material-ui/core";

interface Props {
  group: any;
}
const CompEnd: React.FC<Props> = props => {
  const group = props.group;

  return <CompEndWrapper></CompEndWrapper>;
};

export { CompEnd };
