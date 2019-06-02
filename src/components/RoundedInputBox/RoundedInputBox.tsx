import { InputBoxWrapper, Icon, InputBox } from "./RoundedInputBoxStyles";
import React from "react";
interface RoundedInputBoxProps {
  icon: React.ReactElement;
  className: string;
  [key: string]: any;
}

const RoundedInputBox: React.SFC<RoundedInputBoxProps> = props => {
  return (
    <InputBoxWrapper className={props.className}>
      <Icon>{React.cloneElement(props.icon, {})}</Icon>
      {React.cloneElement(<InputBox />, {
        ...props,
        icon: null,
        className: "",
      })}
    </InputBoxWrapper>
  );
};

export default RoundedInputBox;
