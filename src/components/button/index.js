import { h } from "preact";

import Spinner from "../spinner";
import { StyledButton } from "./styled";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

const Button = ({ buttonClick, btnText, isLoading }) => (
  <StyledButton
    type="button"
    loading={isLoading}
    onClick={buttonClick}
    className={`${DEFAULT_BASE_CLASSNAME}-button`}
  >
    {isLoading ? <Spinner color="#fff" /> : btnText}
  </StyledButton>
);

Button.defaultProps = {
  btnText: "Donate",
  buttonClick: () => {},
};

export default Button;
