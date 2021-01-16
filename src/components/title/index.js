import { h } from "preact";

import {
  Logo,
  StyledH3,
  IconWrapper,
  LogoWrapper,
  TitleWrapper,
} from "./styled";
import Close from "../icons/close";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

const Title = ({ title, logo, onRequestClose }) => {
  const handleCloseClick = () => {
    if (onRequestClose && typeof onRequestClose === "function") {
      onRequestClose();
    }
  };

  return (
    <TitleWrapper className={`${DEFAULT_BASE_CLASSNAME}-title`}>
      {logo && (
        <LogoWrapper>
          <Logo src={logo} title={title} alt={title} />
        </LogoWrapper>
      )}

      {!logo && title && <StyledH3>{title}</StyledH3>}

      {!onRequestClose && (
        <IconWrapper onClick={handleCloseClick}>
          <Close />
        </IconWrapper>
      )}
    </TitleWrapper>
  );
};

Title.defaultProps = {
  title: "",
  logo: "",
};

export default Title;
