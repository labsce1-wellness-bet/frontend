import styled from "styled-components";
import { device } from "../../../../mediaQueries";

const DashboardNewGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.laptop} {
    width: 1000px;
    margin: 0 auto;
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
    display: block;
    width: 100%;
    margin-top: 100px;

    @media ${device.laptop} {
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .input {
      width: 60%;
    }
  }
`;

export { DashboardNewGroupWrapper, Form };
