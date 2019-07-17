import React, { useContext } from "react";
import { VictoryChart, VictoryArea, VictoryGroup, VictoryLabel } from "victory";
import moment from "moment";
import { TestUserContext } from "GlobalContext/TestUserContext";

interface Props {
  width: number;
  height: number;
  data: any;
  label?: any;
}

const LineGraph: React.FC<Props> = props => {
  const state = useContext(TestUserContext);
  const graphColorSelf = "green";
  const graphColors = [
    "cyan",
    "magenta",
    "yellow",
    "orange",
    "purple",
    "aquamarine",
    "chocolate",
    "crimson",
    "darkblue",
    "black",
  ];

  return (
    <VictoryChart width={props.width} height={props.height}>
      {props.label ? (
        <VictoryLabel
          style={{ fontSize: 20 }}
          x={200}
          y={20}
          text={props.label}
          textAnchor="middle"
        />
      ) : (
        false
      )}
      <VictoryGroup
        style={{ data: { strokeWidth: 3, fillOpacity: 0.2 } }}
        colorScale={graphColors}>
        {props.data.map((member: any, index: number) => {
          return (
            <VictoryArea
              key={index}
              style={{
                data:
                  member.fname === state.fname
                    ? {
                        fill: graphColorSelf,
                        stroke: graphColorSelf,
                      }
                    : {},
              }}
              data={[
                {
                  x: moment()
                    .subtract(5, "days")
                    .format("M/DD"),
                  y: member.last_five[0],
                },
                {
                  x: moment()
                    .subtract(4, "days")
                    .format("M/DD"),
                  y: member.last_five[1],
                },
                {
                  x: moment()
                    .subtract(3, "days")
                    .format("M/DD"),
                  y: member.last_five[2],
                },
                {
                  x: moment()
                    .subtract(2, "days")
                    .format("M/DD"),
                  y: member.last_five[3],
                },
                {
                  x: moment()
                    .subtract(1, "days")
                    .format("M/DD"),
                  y: member.last_five[4],
                },
              ]}
            />
          );
        })}
      </VictoryGroup>
    </VictoryChart>
  );
};

export { LineGraph };
