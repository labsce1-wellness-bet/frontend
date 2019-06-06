import React from "react";
import UploadImageWidget from "components/UploadImageWidget/UploadImageWidget";
import { uploadWidgetReducer } from "./reducers/index";
interface Props {}

//@ts-ignore

const Test: React.SFC<Props> = () => {
  const [uwState, uwDispatch] = uploadWidgetReducer();
  return (
    <div>
      <UploadImageWidget
        startingInstructions={"Drag and drop photo evidence of payment here."}
        afterUploadInstructions={
          "Drag and drop new photo to change current one."
        }
        state={uwState}
        dispatch={uwDispatch}
      />
    </div>
  );
};

export default Test;
