import styled from "styled-components";

const InputBoxWrapper = styled.div`
  display: flex;
  position: relative;
  background: rgba(128, 128, 128, 0.1);
  width: 100%;
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
  &::placeholder {
    color: white;
  }
`;

export { InputBoxWrapper, Icon, InputBox };
