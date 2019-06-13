import React from "react";
import { DashboardGroupsWrapper } from "./DashboardGroupsStyles";
import { GroupCard } from "components/GroupCard/GroupCard";

interface Props {}

const DashboardGroups: React.SFC<Props> = () => {
  return (
    <DashboardGroupsWrapper>
      <GroupCard name="John" />
    </DashboardGroupsWrapper>
  );
};

export { DashboardGroups };
