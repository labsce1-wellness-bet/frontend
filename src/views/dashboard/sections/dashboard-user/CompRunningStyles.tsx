import styled from "styled-components";
import { device } from "../../../../mediaQueries";

const CompRunningWrapper = styled.div`
  .appBar {
    @media ${device.laptop} {
      display: none;
    }
  }
  .button-container {
    display: none;
  }

  .ranking-hrs {
    text-align: right;
  }
`;

export { CompRunningWrapper };
