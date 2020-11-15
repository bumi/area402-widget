import { h } from "preact";

import { StyledButton } from "./styled";

const Button = ({ buttonClick, btnText }) => (
  <StyledButton type="button" onClick={buttonClick}>
    {btnText}
  </StyledButton>
);

Button.defaultProps = {
  btnText: "Donate",
  buttonClick: () => {},
};

export default Button;
