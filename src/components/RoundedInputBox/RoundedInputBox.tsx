import { InputBoxWrapper, Icon, InputBox } from "./RoundedInputBoxStyles";
import React from "react";
interface RoundedInputBoxProps {
  icon: React.ReactElement;
  value: string;
  placeholder: string;
  setValue: Function;
}

const RoundedInputBox: React.SFC<RoundedInputBoxProps> = props => {
  return (
    <InputBoxWrapper {...props}>
      <Icon>{React.cloneElement(props.icon, {})}</Icon>
      <InputBox
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e: any) => {
          props.setValue(e.target.value);
        }}
      />
    </InputBoxWrapper>
  );
};

export default RoundedInputBox;
