import React from "react";
import { VictoryLabel, VictoryPie } from "victory";
import moment from "moment";

interface Props {
  width: number;
  height: number;
  group: any;
  label?: any;
}

const PieGraph: React.FC<Props> = props => {
  const group = props.group;
  const startDate = moment(group.startDate, "M/DD/YYYY");
  const endDate = moment(group.endDate, "M/DD/YYYY");
  const today = moment(moment().format("M/DD/YYYY"), "M/DD/YYYY");
  const daysLeft = endDate.diff(today, "days") + 1;
  const daysPast = today.diff(startDate, "days");
  return (
    <svg viewBox={`0 0 ${props.width} ${props.height}`}>
      <VictoryPie
        standalone={false}
        width={props.width}
        height={props.height}
        data={[{ label: "", y: daysPast }, { label: "", y: daysLeft }]}
        colorScale={"blue"}
        innerRadius={100}
        labels={() => ""}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 40, fill: "#3f51b5" }}
        x={200}
        y={200}
        text={`${daysLeft} ` + (daysLeft === 1 ? "day" : "days")}
      />
    </svg>
  );
};

export { PieGraph };
