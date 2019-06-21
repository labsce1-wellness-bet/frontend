import styled from "styled-components";
import { device } from "../../../../mediaQueries";

const DashboardNewGroupWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .button {
    width: 50%;
    margin: 20px auto 100px;

    @media ${device.laptop} {
      width: 200px;
      margin: 30px auto 100px;
    }
  }
  .title {
    display: none;
    @media ${device.laptop} {
      display: block;
      width: 100%;
      margin-top: 100px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${device.laptop} {
    width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .input {
      width: 45%;
    }
    .message-input {
      width: 100%;
      textarea {
        height: 160px;
      }
    }
  }
`;

export { DashboardNewGroupWrapper, Form };
