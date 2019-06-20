import styled from "styled-components";

const DashboardStartWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  & .dashboard-start__btn:first-child {
    margin-bottom: 24px;
  }
`;

export { DashboardStartWrapper, Content };
