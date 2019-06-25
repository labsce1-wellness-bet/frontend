import React from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

interface Props {
  data: any;
}

const Rankings: React.FC<Props> = props => {
  props.data.sort((a: any, b: any) =>
    a.progress > b.progress ? -1 : b.progress > a.progress ? 1 : 0,
  );
  return (
    <List>
      {props.data.map((member: any, index: number) => {
        return (
          <div key={index}>
            <ListItem className="ranking">
              <ListItemText>{`${index + 1}. ${member.fname} ${
                member.lname
              }`}</ListItemText>
              <ListItemText className="ranking-hrs">{`${member.progress} Hrs`}</ListItemText>
            </ListItem>
            <Divider></Divider>
          </div>
        );
      })}
    </List>
  );
};

export { Rankings };
