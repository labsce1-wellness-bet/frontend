import React from "react";
import { CompRunningWrapper } from "./CompRunningStyles";

interface Props {
  group: any;
}
const CompRunning: React.FC<Props> = props => {
  return <CompRunningWrapper></CompRunningWrapper>;
};

export { CompRunning };
