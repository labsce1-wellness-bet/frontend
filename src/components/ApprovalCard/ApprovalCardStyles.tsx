import styled from "styled-components";

const ApprovedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ApprovedHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > *:first-child {
    margin-right: 12px;
  }
`;

const PaymentProofContent = styled.div`
  display: flex;
  flex-flow: column;
`;
const NotUploadedContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export {
  ApprovedContent,
  ApprovedHeader,
  ActionButtons,
  PaymentProofContent,
  NotUploadedContent,
};
