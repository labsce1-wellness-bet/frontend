import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
}));
export interface Props {
  open: boolean;

  [key: string]: any;
}

const MaterialSimpleModal: React.SFC<Props> = props => {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <Modal {...props}>
      <div style={modalStyle} className={classes.paper}>
        {props.children}
      </div>
    </Modal>
  );
};

export { MaterialSimpleModal };
