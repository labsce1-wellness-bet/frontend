import styled from "styled-components";
import BlurImage from "components/BlurImage/BlurImage";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  color: white;
  overflow: hidden;
  @media screen and (max-height: 475px) {
    overflow-y: scroll;
  }
`;
// https://css-tricks.com/almanac/properties/f/filter/
const BackgroundImage = styled(BlurImage)`
  filter: brightness(40%);
  /* Set up positioning */
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 600px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
  /* Set up positioning */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export { AuthWrapper, BackgroundImage };
