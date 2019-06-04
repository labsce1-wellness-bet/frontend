import React from "react";

interface Props {}
//@ts-ignore

const Test: React.SFC<Props> = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log({
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            apiKey: process.env.REACT_APP_CLOUD_API_KEY,
            resourceType: "image",
            uploadPreset: "wb_users_avatars",
          });
          //@ts-ignore
          window.cloudinary.openUploadWidget(
            {
              apiKey: process.env.REACT_APP_CLOUD_API_KEY,
              resourceType: "image",
              uploadPreset: "kntzkorb",
              public_id: "whatever",
            },
            //@ts-ignore
            (error, result) => {
              console.log({ result });
              if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
              }
            },
          );
        }}>
        Upload
      </button>
    </div>
  );
};

export default Test;
