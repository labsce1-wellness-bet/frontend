import React, { useState, useRef, useEffect } from "react";
import {
  PhotoCircle,
  ModalContent,
  Video,
  Canvas,
} from "./UploadAvatarPhotoStyles";
import { MaterialSimpleModal } from "components/MaterialSimpleModal/MaterialSimpleModal";
import { Button } from "@material-ui/core";
export interface Photo {
  state: any;
  dispatch: Function;
}

const UploadAvatarPhoto: React.SFC<Photo> = ({ state, dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const {
    //Take Picture Mode
    takePictureModeOn,
  } = state;

  useEffect(() => {
    const startVideo = () => {
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
            dispatch({ type: "RESET_STATE" });
          });
      }
    };
    if (takePictureModeOn) {
      startVideo();
    }
  }, [takePictureModeOn, dispatch]);

  const stopVideo = () => {
    //@ts-ignore
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current as any).srcObject
        .getVideoTracks()
        .forEach((track: any) => track.stop());
    }
  };
  return (
    <>
      <MaterialSimpleModal
        aria-labelledby="upload photo modal"
        aria-describedby="upload a photo from device or take a picture"
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          stopVideo();
          dispatch({ type: "RESET_STATE" });
        }}>
        <ModalContent>
          {!takePictureModeOn && (
            <Button
              onClick={() => {
                dispatch({ type: "TAKE_PICTURE_MODE_ON" });
              }}
              variant="contained"
              color="primary">
              Take Picture
            </Button>
          )}
          {takePictureModeOn && (
            <>
              <Video muted id="videoElement" ref={videoRef} />
              <Button
                variant="contained"
                onClick={() => {
                  (canvasRef.current as any)
                    .getContext("2d")
                    .drawImage(
                      videoRef.current,
                      0,
                      0,
                      (canvasRef.current as any).width,
                      (canvasRef.current as any).height,
                    );
                  dispatch({
                    type: "UPLOADED_IMAGE",
                    base64ImageData: (canvasRef.current as any).toDataURL(),
                  });
                  // console.log((canvasRef.current as any).toDataURL());
                }}>
                Take Snapshot
              </Button>
              <Canvas ref={canvasRef} />
              <Button
                variant="contained"
                onClick={() => {
                  stopVideo();
                  setIsModalOpen(false);
                  dispatch({ type: "RESET_MODAL_STATE" });
                }}>
                Done
              </Button>
            </>
          )}
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
