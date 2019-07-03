import React, { useContext } from "react";
import { UserContext } from "GlobalContext/UserContext";
import { DashboardUser } from "./dashboard-user/DashboardUser";
import { DashboardAdmin } from "./dashboard-admin/DashboardAdmin";

interface Props {
  match: any;
}
const HandleGroupView: React.FC<Props> = props => {
  const state: { userId: number; groups: any } = useContext(UserContext);
  const group = state.groups.find(
    (group: { groupId: any }) =>
      group.groupId.toString() === props.match.params.groupId,
  );

  if (state.userId === group.admin) {
    return <DashboardAdmin group={group}></DashboardAdmin>;
  } else {
    return <DashboardUser group={group}></DashboardUser>;
  }
};

export { HandleGroupView };
