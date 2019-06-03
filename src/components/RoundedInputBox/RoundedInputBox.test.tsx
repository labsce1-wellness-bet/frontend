import React from "react";
import { render, cleanup } from "@testing-library/react";
import RoundedInputBox from "./RoundedInputBox";
import { AccountCircle } from "@material-ui/icons";

afterEach(cleanup);

describe("testing <RoundedInputBox /> component", () => {
  it("creates snapshot", () => {
    const { asFragment } = render(
      <RoundedInputBox
        icon={<AccountCircle color="inherit" />}
        value={"username1"}
        onChange={() => {}}
        type="text"
        placeholder={"Username"}
        className="input-box"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
