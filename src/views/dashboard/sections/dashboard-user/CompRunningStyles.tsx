import styled from "styled-components";
import { device } from "../../../../mediaQueries";

const CompRunningWrapper = styled.div`
  .ranking-hrs {
    text-align: right;
  }

  .desktop-view {
    display: none;
  }

  .mobile-graphs {
    margin-bottom: 60px;
  }

  @media ${device.laptop} {
    .desktop-view {
      display: flex;
      margin: 50px auto;
      width: 1000px;
      flex-wrap: wrap;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
    }

    .card {
      border-radius: 25px;
      width: 32%;
      height: 350px;

      span {
        color: #3f51b5;
      }
    }

    .three-cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }

    .comp-stats {
      width: 100%;
      margin-bottom: 50px;
    }

    h4 {
      font-weight: 700;
    }

    .mobile-tabs {
      display: none;
    }
  }
`;

export { CompRunningWrapper };
