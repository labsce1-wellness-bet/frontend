import styled from "styled-components";

const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 2px dashed lightblue;
  color: lightblue;
`;

const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CtaInstruction = styled.h2``;
export { UploadContent, UploadWrapper, CtaInstruction };
