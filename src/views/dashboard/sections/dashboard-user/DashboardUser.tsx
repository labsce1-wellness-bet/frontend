import React from "react";
import { DashboardUserWrapper } from "./DashboardUserStyles";

interface Props {
  group: any;
}
const DashboardUser: React.FC<Props> = props => {
  return (
    <DashboardUserWrapper>
      <h1>{`User before start group id: ${props.group.groupId}`}</h1>
    </DashboardUserWrapper>
  );
};

export { DashboardUser };
