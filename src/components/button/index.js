import { h } from "preact";

import Spinner from "../spinner";
import { StyledButton } from "./styled";

const Button = ({ buttonClick, btnText, isLoading }) => (
  <StyledButton type="button" onClick={buttonClick} loading={isLoading}>
    {isLoading ? <Spinner /> : btnText}
  </StyledButton>
);

Button.defaultProps = {
  btnText: "Donate",
  buttonClick: () => {},
};

export default Button;
