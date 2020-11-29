import { h } from "preact";

import Close from "../icons/close";
import { StyledH3, HiddenBlock, TitleWrapper } from "./styled";

const Title = ({ title, onRequestClose }) => (
  <TitleWrapper>
    <HiddenBlock>asdkas</HiddenBlock>

    <StyledH3>{title}</StyledH3>

    <span onClick={onRequestClose}>
      <Close />
    </span>
  </TitleWrapper>
);

export default Title;
