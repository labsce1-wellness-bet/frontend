import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { DashboardCompetitionsWrapper } from "./DashboardCompetitionsStyles";
import { CompetitionCard } from "components/CompetitionCard/CompetitionCard";
export interface Props {}

// const useStyles = makeStyles(theme => ({}));
const DashboardCompetitions: React.SFC<Props> = () => {
  //@ts-ignore
  //   const classes = useStyles();

  return (
    <DashboardCompetitionsWrapper>
      <CompetitionCard
        startDate={"January"}
        endDate={"December"}
        metricType="Sleep Quality"
        betAmount={100}
      />
      <CompetitionCard
        startDate={"January"}
        endDate={"December"}
        metricType="Sleep Quality"
        betAmount={100}
      />
    </DashboardCompetitionsWrapper>
  );
};

export { DashboardCompetitions };
