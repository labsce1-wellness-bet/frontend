import styled from "styled-components";
import { device } from "../../../../mediaQueries";
import BlurImage from "components/BlurImage/BlurImage";

const CompEndWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  .mobile-tabs {
    text-align: center;
    width: 100%;
  }

  .tab {
    padding: 30px 0 50px;
  }

  .ranking-hrs {
    text-align: right;
  }

  .desktop {
    display: none;
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding-top: 160px;
    }
  }

  @media ${device.laptop} {
    width: 1000px;

    .mobile-tabs {
      display: none;
    }
  }
`;

const Image = styled(BlurImage)``;

export { CompEndWrapper, Image };
