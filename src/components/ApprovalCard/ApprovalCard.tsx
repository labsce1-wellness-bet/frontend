import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Receipt } from "@material-ui/icons";
import { MaterialSimpleModal } from "components/MaterialSimpleModal/MaterialSimpleModal";

export interface Props {
  name: string;
  hasUploadedReceipt: boolean;
}
const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    cursor: "pointer",
    maxWidth: "600px",
    "&:hover": {
      background: "lightgrey",
    },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2em",
  },
  receiptAttached: {
    color: "grey",
  },
  receiptVacant: {
    color: "purple",
  },
}));
const ApprovalCard: React.SFC<Props> = ({ name, hasUploadedReceipt }) => {
  //@ts-ignore
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <MaterialSimpleModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <div />
      </MaterialSimpleModal>
      <Paper className={classes.paper} onClick={() => setIsModalOpen(true)}>
        <div className={classes.contentWrapper}>
          <h2>{name}</h2>
          <Receipt
            className={
              hasUploadedReceipt
                ? classes.receiptAttached
                : classes.receiptVacant
            }
          />
        </div>
      </Paper>
    </>
  );
};

export { ApprovalCard };
