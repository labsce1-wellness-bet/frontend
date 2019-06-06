import styled from "styled-components";

const UploadWrapper = styled.div`
  display: inline-block;
  width: ${(props: { isImageUploaded: boolean }) =>
    props.isImageUploaded ? "auto" : "100%"};
  border: 2px dashed #006eff;
  color: #006eff;
  max-width: 800px;
  position: relative;
  padding: 0em;
`;
const UploadImageInput = styled.input`
  opacity: 0;
  overflow: hidden;
`;
const OverlayLabel = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  cursor: pointer;
  &:hover {
    background: #006eff3a;
  }
  & + .upload-image-widget__after-upload-content {
  }
`;
const StartingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  & > * {
    margin: 0;
  }
`;

const AfterUploadContent = styled.div`
  display: flex;
  visibility: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 500;
  &:hover {
    visibility: visible;
  }
  & > * {
    margin: 0;
  }
`;

const Image = styled.img`
  /* Set up proportionate scaling */
  width: 100%;
  pointer-events: none;
`;
export {
  UploadWrapper,
  UploadImageInput,
  OverlayLabel,
  Image,
  StartingContent,
  AfterUploadContent,
};
