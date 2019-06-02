import styled from "styled-components";

const InputBoxWrapper = styled.div`
  display: flex;
  position: relative;
  background: rgba(128, 128, 128, 0.3);
  width: 100%;
  border-radius: 50px;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: white;
`;
const InputBox = styled.input`
  padding: 1.4em 2em 1.4em 4em;
  width: 100%;
  color: white;
  background: none;
  border: none;
  outline: none;
  border-radius: 50px;
  &:focus {
    -webkit-box-shadow: 0px 0px 23px -7px rgba(224, 224, 224, 1);
    -moz-box-shadow: 0px 0px 23px -7px rgba(224, 224, 224, 1);
    box-shadow: 0px 0px 23px -7px rgba(224, 224, 224, 1);
  }
  &::placeholder {
    color: white;
  }
`;

export { InputBoxWrapper, Icon, InputBox };
