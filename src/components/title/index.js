import { h } from "preact";

import Close from "../icons/close";
import { StyledH3, TitleWrapper, IconWrapper } from "./styled";

const Title = ({ title, onRequestClose }) => (
  <TitleWrapper>
    <StyledH3>{title}</StyledH3>

    <IconWrapper onClick={onRequestClose}>
      <Close />
    </IconWrapper>
  </TitleWrapper>
);

export default Title;
