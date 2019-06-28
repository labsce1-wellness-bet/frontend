import React, { useState } from "react";
import { DashboardApprovePayWrapper } from "./DashboardApprovePayStyles";

interface Props {
  group: any;
}
const DashboardApprovePay: React.FC<Props> = props => {
  return <DashboardApprovePayWrapper></DashboardApprovePayWrapper>;
};

export { DashboardApprovePay };
