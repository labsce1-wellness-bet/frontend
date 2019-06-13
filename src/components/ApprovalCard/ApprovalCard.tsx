import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Receipt } from "@material-ui/icons";
import { MaterialSimpleModal } from "components/MaterialSimpleModal/MaterialSimpleModal";
import {
  ApprovedContent,
  ApprovedHeader,
  ActionButtons,
  PaymentProofContent,
  NotUploadedContent,
} from "./ApprovalCardStyles";
import { Button } from "@material-ui/core";
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
    color: "purple",
  },
  receiptVacant: {
    color: "grey",
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
        {hasUploadedReceipt ? (
          <ApprovedContent>
            <ApprovedHeader>
              <h2>{name}</h2>
              <ActionButtons>
                <Button variant="contained">Deny</Button>
                <Button variant="contained" color="primary">
                  Approve
                </Button>
              </ActionButtons>
            </ApprovedHeader>
            <PaymentProofContent>
              <p>Proof of Payment</p>
              {/* TODO: Add image of receipt */}
            </PaymentProofContent>
          </ApprovedContent>
        ) : (
          <NotUploadedContent>
            <p>{name} has not uploaded their receipt yet.</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsModalOpen(false)}>
              Exit
            </Button>
          </NotUploadedContent>
        )}
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
