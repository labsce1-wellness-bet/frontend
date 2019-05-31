import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  padding: 2em 1em;
  color: white;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
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
  MainContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
};
