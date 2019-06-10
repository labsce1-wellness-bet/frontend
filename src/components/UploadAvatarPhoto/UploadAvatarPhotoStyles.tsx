import styled from "styled-components";

const PhotoCircle = styled.div`
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: rgba(128, 128, 128, 0.3);
  position: relative;
  cursor: pointer;
  &:hover {
    background: rgba(128, 128, 128, 0.7);
  }
  &::after {
    content: "Add Photo";
    display: flex;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export { PhotoCircle };
