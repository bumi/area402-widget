import { h } from "preact";

import Button from "../../components/button";
import {
  Content,
  Subtitle,
  Container,
  ContentWrapper,
} from "../../utils/common-styles";

const WelcomeScreen = ({ onDonateClick, message }) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>{message}</Content>
      </ContentWrapper>

      <Button buttonClick={onDonateClick} btnText="Donate Now" />
    </Container>
  );
};

WelcomeScreen.defaultProps = {
  message: "",
  onDonateClick: () => {},
};

export default WelcomeScreen;
