import styled from "styled-components";
import BlurImage from "components/BlurImage/BlurImage";
import { Link } from "react-router-dom";

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
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  padding: 2em 1em;
  @media screen and (max-height: 475px) {
    padding: 1em 0.6em;
  }
`;
const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  & .organization {
    font-size: 1.6rem;
  }
  & .category {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
`;

const GetStartedForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-bottom: 36px;
  & .input-box {
    margin-bottom: 16px;
  }
  & .submit-btn {
    margin-top: 24px;
  }
`;
const FooterContent = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  color: #acacac;
  text-decoration-line: none;
  &:hover {
    color: white;
    text-decoration-line: underline;
  }
`;
export {
  AuthWrapper,
  BackgroundImage,
  MainContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
  StyledLink,
};
