import styled from "styled-components";
import { Button } from "@material-ui/core";

const DashboardNewGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const CustomButton = styled(Button)`
  width: 50%;
  && {
    margin: 20px auto 100px;
  }
`;

export { DashboardNewGroupWrapper, Form, CustomButton };
