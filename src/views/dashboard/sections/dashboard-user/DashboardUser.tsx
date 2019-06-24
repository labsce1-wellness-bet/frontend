import React from "react";
import { BeforeStart } from "./BeforeStart";
import { CompRunning } from "./CompRunning";
import { CompEnd } from "./CompEnd";

import moment from "moment";

interface Props {
  group: any;
}
const DashboardUser: React.FC<Props> = props => {
  const curr_date = moment().format("M/DD/YYYY");
  const start_date = props.group.startDate;
  const end_date = props.group.endDate;
  const isStarted = curr_date >= start_date;
  const isEnded = curr_date > end_date;

  if (isEnded) {
    return <CompEnd group={props.group}></CompEnd>;
  } else if (!isStarted) {
    return <BeforeStart group={props.group}></BeforeStart>;
  }
  return <CompRunning group={props.group}></CompRunning>;
};

export { DashboardUser };
