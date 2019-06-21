import React from "react";
import { DashboardUserWrapper } from "./DashboardUserStyles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {
  UploadImageWidget,
  uploadWidgetReducer,
} from "components/UploadImageWidget/index";

import uploadToCloudinaryReducer from "lib/utils/uploadImageToCloudinary/uploadToCloudinaryReducer";
import uploadImageToCloudinary from "lib/utils/uploadImageToCloudinary/uploadImageToCloudinary";

interface Props {
  group: any;
}
const BeforeStart: React.FC<Props> = props => {
  const [uwState, uwDispatch] = uploadWidgetReducer();
  const [cloudState, cloudDispatch] = uploadToCloudinaryReducer();
  const { base64ImageData } = uwState;
  const group = props.group;

  return (
    <DashboardUserWrapper>
      <div className="info-container">
        <Typography
          variant="h4"
          color="primary"
          align="center"
          className="title">
          {group.groupName}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Admin: ${group.adminName}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Buy in: $${group.betAmount}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Current Pot Total: $${group.potTotal}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`Start: ${group.startDate}`}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className="text">
          {`End: ${group.endDate}`}
        </Typography>
      </div>
      <div className="message-container">
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className="message">
          {`Message:`}
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          align="left"
          className="message-text">
          {`${group.message}`}
        </Typography>
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" className="button">
          ADD PAYMENT PROOF
        </Button>
        <Button variant="outlined" color="primary" className="button">
          LEAVE
        </Button>
      </div>
      <div className="drag-n-drop">
        <UploadImageWidget
          startingInstructions={"Drag and drop photo evidence of payment here."}
          afterUploadInstructions={
            "Drag and drop new photo to change current one."
          }
          state={uwState}
          dispatch={uwDispatch}
        />
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={async () => {
            const data = await uploadImageToCloudinary(
              {
                upload_preset: "users-receipts",
                public_id: "receipt-from-user1234",
              },
              base64ImageData,
              cloudDispatch,
            );
            console.log({ data });
            console.log({ cloudState });
          }}>
          Upload Image
        </Button>
      </div>
    </DashboardUserWrapper>
  );
};

export { BeforeStart };
