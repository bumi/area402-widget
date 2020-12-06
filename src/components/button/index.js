import { h } from "preact";

import Spinner from "../spinner";
import { StyledButton } from "./styled";

const Button = ({ buttonClick, btnText, isLoading }) => (
  <StyledButton type="button" onClick={buttonClick} disabled={isLoading}>
    {isLoading ? <Spinner /> : btnText}
  </StyledButton>
);

Button.defaultProps = {
  isLoading: false,
  btnText: "Donate",
  buttonClick: () => {},
};

export default Button;
