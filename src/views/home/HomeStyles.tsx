import styled from "styled-components";
import BlurImage from "components/BlurImage/BlurImage";
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  color: white;
  overflow: hidden;
`;
const BackgroundImage = styled(BlurImage)`
  filter: brightness(60%);
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
  max-width: 600px;
  width: 100%;
  padding: 2em 1em;
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
  & .input-box {
    margin-bottom: 16px;
  }
`;
const FooterContent = styled.footer`
  display: flex;
  justify-content: space-between;
`;
export {
  HomeWrapper,
  BackgroundImage,
  MainContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
};
