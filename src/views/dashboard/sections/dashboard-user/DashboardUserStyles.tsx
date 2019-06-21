import styled from "styled-components";

const DashboardUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  .title {
    margin: 30px;
  }
  .text {
    border-bottom: 1px solid lightgrey;
    padding: 5px 0;
  }
  .button {
    width: 60%;
    margin: 10px auto;
  }
  .button:last-child {
    margin-bottom: 80px;
  }
`;

export { DashboardUserWrapper };
