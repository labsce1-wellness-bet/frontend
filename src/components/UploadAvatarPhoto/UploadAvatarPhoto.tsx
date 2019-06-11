import React, { useState, useRef, RefObject } from "react";
import {
  PhotoCircle,
  ModalContent,
  Video,
  Canvas,
} from "./UploadAvatarPhotoStyles";
import { MaterialSimpleModal } from "components/MaterialSimpleModal/MaterialSimpleModal";
import { Divider, Button } from "@material-ui/core";
export interface Photo {
  state: any;
  dispatch: Function;
}

const UploadAvatarPhoto: React.SFC<Photo> = ({ state, dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const fileSelectHandler = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadstart = () => {
      dispatch({ type: "UPLOADING_IMAGE" });
    };
    reader.onloadend = () => {
      dispatch({ type: "UPLOADED_IMAGE", base64ImageData: reader.result });
      console.log(url);
    };
    reader.onerror = () => {
      dispatch({ type: "UPLOADING_IMAGE_ERROR" });
    };
  };
  const startVideo = (e: any) => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          const { current } = videoRef;
          const video: any = current as unknown;
          video.srcObject = stream;
          video.onloadedmetadata = function() {
            video.play();
          };
        })
        .catch(function(err: Error) {
          console.log(err);
        });
    }
  };
  return (
    <>
      <MaterialSimpleModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <Divider />
          <Button onClick={startVideo} variant="contained" color="primary">
            Take Picture
          </Button>
          <Video muted id="videoElement" ref={videoRef} />
          <Button
            onClick={() => {
              const canvas = canvasRef.current as any;
              canvas
                .getContext("2d")
                .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            }}>
            Take Snapshot
          </Button>
          <Canvas ref={canvasRef} />
          <Button
            onClick={() => {
              //@ts-ignore
              videoRef.current.srcObject
                .getVideoTracks()
                .forEach((track: any) => track.stop());
            }}>
            Stop video
          </Button>
        </ModalContent>
      </MaterialSimpleModal>
      <PhotoCircle
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
    </>
  );
};

export { UploadAvatarPhoto };
