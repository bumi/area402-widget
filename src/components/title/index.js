import { h } from "preact";

import Close from "../icons/close";
import { StyledH3, TitleWrapper, IconWrapper, Logo, LogoWrapper } from "./styled";

const Title = ({ title, logo, onRequestClose }) => (
  <TitleWrapper>
    { logo && (
      <LogoWrapper>
        <Logo src={logo} title={title} alt={title} />
      </LogoWrapper>
    )}
    { !logo && title && (
      <StyledH3>{title}</StyledH3>
    )}

    <IconWrapper onClick={onRequestClose}>
      <Close />
    </IconWrapper>
  </TitleWrapper>
);

export default Title;
