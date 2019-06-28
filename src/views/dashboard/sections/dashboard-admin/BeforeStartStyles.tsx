import styled from "styled-components";
import { device } from "../../../../mediaQueries";

const BeforeStartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .desktop-view {
    display: none;
    @media ${device.laptop} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1000px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
  }

  .info-content {
    @media ${device.laptop} {
      width: 50%;
    }
  }

  .title {
    margin: 30px;

    @media ${device.laptop} {
      text-align: left;
      margin: 80px 0 30px;
    }
  }
  .text {
    border-bottom: 1px solid lightgrey;
    padding: 5px 0;

    @media ${device.laptop} {
      border-bottom: none;
      font-size: 1rem;
    }
  }

  .message {
    @media ${device.laptop} {
      width: 33%;
      margin: 10px 0 20px;
    }
  }

  .message-container {
    @media ${device.laptop} {
      width: 33%;
      margin: 80px 0 30px;
    }
  }
  .message-text {
    @media ${device.laptop} {
      line-height: 36px;
    }
  }

  .appBar {
    @media ${device.laptop} {
      display: none;
    }
  }

  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;

    @media ${device.laptop} {
      display: none;
    }
  }

  .track-payment {
    margin-bottom: 50px;
  }

  .desktop-list {
    display: flex;

    span {
      display: block;
      text-align: center;
    }
  }
`;

export { BeforeStartWrapper };
