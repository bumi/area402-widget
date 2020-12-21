import { h } from "preact";

import Spinner from "../spinner";
import { StyledButton } from "./styled";

const Button = ({ buttonClick, btnText, isLoading }) => (
  <StyledButton type="button" onClick={buttonClick} loading={isLoading} className="__fourohtwo-button">
    {isLoading ? <Spinner /> : btnText}
  </StyledButton>
);

Button.defaultProps = {
  btnText: "Donate",
  buttonClick: () => {},
};

export default Button;
